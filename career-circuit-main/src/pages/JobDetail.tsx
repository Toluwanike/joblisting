
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Briefcase, CalendarDays, MapPin } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import Button from "@/components/common/Button";
import { useJobsData } from "@/hooks/useJobsData";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/sonner";

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { findJobById } = useJobsData();
  const [isLoading, setIsLoading] = useState(true);
  const [job, setJob] = useState(findJobById(id || ""));
  const [isApplying, setIsApplying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // If job doesn't exist, redirect to homepage
  useEffect(() => {
    if (!job && !isLoading) {
      navigate("/");
    }
  }, [job, navigate, isLoading]);
  
  // Simulated loading state for a smoother UX
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  // Reset scroll position when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  const handleApply = () => {
    setIsApplying(true);
    
    // Simulate application process
    setTimeout(() => {
      setIsApplying(false);
      toast.success("Application submitted successfully!");
    }, 1500);
  };
  
  if (isLoading || !job) {
    return (
      <AppLayout>
        <div className="container max-w-4xl mx-auto px-4 py-16">
          <div className="space-y-4">
            <div className="h-10 bg-muted/30 rounded-md animate-pulse-soft w-3/4" />
            <div className="h-6 bg-muted/30 rounded-md animate-pulse-soft w-1/2" />
            <div className="h-6 bg-muted/30 rounded-md animate-pulse-soft w-1/3" />
            
            <div className="pt-8">
              <div className="h-4 bg-muted/30 rounded-md animate-pulse-soft w-full mb-2" />
              <div className="h-4 bg-muted/30 rounded-md animate-pulse-soft w-full mb-2" />
              <div className="h-4 bg-muted/30 rounded-md animate-pulse-soft w-4/5 mb-2" />
              <div className="h-4 bg-muted/30 rounded-md animate-pulse-soft w-2/3" />
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }
  
  return (
    <AppLayout>
      <div 
        className={cn(
          "transition-opacity duration-500",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="relative pt-16 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-transparent -z-10" />
          
          <div className="container max-w-4xl mx-auto px-4">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft size={16} className="mr-1" />
              Back to listings
            </button>
            
            <div className="flex items-start gap-5">
              <div className="h-16 w-16 rounded-lg overflow-hidden bg-secondary flex items-center justify-center shrink-0">
                {job.companyLogo ? (
                  <img 
                    src={job.companyLogo} 
                    alt={`${job.company} logo`} 
                    className="h-full w-full object-cover" 
                  />
                ) : (
                  <Briefcase className="h-8 w-8 text-muted-foreground" />
                )}
              </div>
              
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-3xl font-display font-semibold">{job.title}</h1>
                  {job.featured && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      Featured
                    </span>
                  )}
                </div>
                
                <div className="text-xl font-medium text-muted-foreground">
                  {job.company}
                </div>
                
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="inline-flex items-center text-muted-foreground">
                    <MapPin size={18} className="mr-1.5" />
                    {job.location}
                  </div>
                  
                  <div className="inline-flex items-center text-muted-foreground">
                    <CalendarDays size={18} className="mr-1.5" />
                    Posted on {job.postedAt}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container max-w-4xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div>
                <h2 className="text-xl font-semibold mb-4">Description</h2>
                <div className="prose text-muted-foreground">
                  <p>{job.description}</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                <ul className="space-y-2">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary/10 text-primary text-xs mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Benefits</h2>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="sticky top-24 glass-card p-6 rounded-xl space-y-5">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Job Details</h3>
                  <div className="text-sm text-muted-foreground">
                    <div className="flex justify-between py-2 border-b">
                      <span>Job Type</span>
                      <span className="font-medium text-foreground">{job.type}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Salary</span>
                      <span className="font-medium text-foreground">{job.salary}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Location</span>
                      <span className="font-medium text-foreground">{job.location}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={handleApply} 
                  className="w-full" 
                  size="lg"
                  loading={isApplying}
                >
                  Apply Now
                </Button>
                
                <p className="text-xs text-center text-muted-foreground pt-2">
                  You'll be redirected to the company's application page
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default JobDetail;
