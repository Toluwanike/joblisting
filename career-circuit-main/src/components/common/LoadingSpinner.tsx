
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner = ({ size = 'md', className }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-3',
    lg: 'h-12 w-12 border-4',
  };

  return (
    <div className="flex justify-center items-center">
      <div 
        className={cn(
          "rounded-full border-t-transparent border-primary animate-spin",
          sizeClasses[size],
          className
        )} 
        role="status" 
        aria-label="loading"
      />
    </div>
  );
};

export default LoadingSpinner;
