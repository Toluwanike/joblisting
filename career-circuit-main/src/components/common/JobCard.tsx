
import { ArrowUpRight, Briefcase, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { Job } from "@/data/jobs";

interface JobCardProps {
  job: Job;
  className?: string;
}

const JobCard = ({ job, className }: JobCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      to={`/job/${job.id}`}
      className={cn(
        "block relative w-full rounded-xl overflow-hidden",
        "transition-all duration-300 ease-spring",
        "border bg-card text-card-foreground",
        "group hover:shadow-lg",
        isHovered && "scale-[1.02]",
        job.featured && "ring-1 ring-primary/20",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {job.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
            Featured
          </span>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-md overflow-hidden bg-secondary flex items-center justify-center shrink-0">
            {job.companyLogo ? (
              <img 
                src={job.companyLogo} 
                alt={`${job.company} logo`} 
                className="h-full w-full object-cover" 
              />
            ) : (
              <Briefcase className="h-6 w-6 text-muted-foreground" />
            )}
          </div>
          
          <div className="space-y-1 flex-1">
            <h3 className="font-medium text-lg leading-tight group-hover:text-primary transition-colors duration-200">
              {job.title}
            </h3>
            
            <div className="flex items-center text-muted-foreground">
              <span className="text-sm font-medium">{job.company}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 space-y-3">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {job.shortDescription}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-3">
            <div className="inline-flex items-center text-xs text-muted-foreground">
              <MapPin size={14} className="mr-1" />
              {job.location}
            </div>
            
            <div className="inline-flex items-center text-xs text-muted-foreground">
              <span className="inline-block h-1 w-1 rounded-full bg-muted-foreground mx-2"></span>
              {job.type}
            </div>
          </div>
        </div>
        
        <div 
          className={cn(
            "flex justify-between items-center mt-5 pt-5 border-t",
            "text-xs text-muted-foreground"
          )}
        >
          <div>
            {job.salary}
          </div>
          
          <div className={cn(
            "inline-flex items-center font-medium",
            "text-primary"
          )}>
            View Details
            <ArrowUpRight 
              size={14} 
              className={cn(
                "ml-1",
                "transition-transform duration-300 ease-spring",
                isHovered ? "transform translate-x-0.5 -translate-y-0.5" : ""
              )}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
