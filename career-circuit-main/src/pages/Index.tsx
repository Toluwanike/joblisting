
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import AppLayout from "@/components/layout/AppLayout";
import SearchBar from "@/components/common/SearchBar";
import Button from "@/components/common/Button";
import JobCard from "@/components/common/JobCard";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { useJobsData } from "@/hooks/useJobsData";
import { cn } from "@/lib/utils";

const Index = () => {
  const { 
    jobs, 
    isLoading, 
    searchTerm, 
    setSearchTerm, 
    loadMore, 
    hasMore,
    totalJobs 
  } = useJobsData();
  
  // Reset scroll position when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout>
      {/* Hero section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center space-y-4 animate-slide-down">
            <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-balance">
              Find Your Perfect Job Match
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover opportunities aligned with your skills and aspirations in our curated job marketplace.
            </p>
            
            <div className="mt-8 max-w-xl mx-auto">
              <SearchBar 
                value={searchTerm} 
                onChange={setSearchTerm} 
                className="w-full animate-scale-in"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Job listings */}
      <section className="py-12">
        <div className="container max-w-5xl mx-auto px-4">
          {/* Results header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-medium">
              {searchTerm ? (
                <>Search Results <span className="text-muted-foreground">({totalJobs})</span></>
              ) : (
                "Latest Opportunities"
              )}
            </h2>
            
            {searchTerm && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setSearchTerm("")}
              >
                Clear Search
              </Button>
            )}
          </div>
          
          {/* Grid of job cards */}
          <div className="relative">
            {isLoading ? (
              <div className="py-20 flex justify-center items-center">
                <LoadingSpinner />
              </div>
            ) : jobs.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {jobs.map((job, index) => (
                    <div 
                      key={job.id}
                      className={cn(
                        "opacity-0",
                        "animate-slide-up",
                        "animation-delay-" + (100 * index) + "ms"
                      )}
                      style={{ 
                        animationDelay: `${100 * (index % 6)}ms`,
                        animationFillMode: 'forwards'
                      }}
                    >
                      <JobCard job={job} />
                    </div>
                  ))}
                </div>
                
                {/* Load more button */}
                {hasMore && (
                  <div className="mt-12 text-center">
                    <Button 
                      onClick={loadMore}
                      iconRight={<ArrowRight size={16} />}
                    >
                      Load More
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="py-20 text-center">
                <p className="text-xl text-muted-foreground">
                  No jobs found matching your search.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4" 
                  onClick={() => setSearchTerm("")}
                >
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Index;
