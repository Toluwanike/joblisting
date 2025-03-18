
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, Info } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import Button from "@/components/common/Button";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/sonner";

const PostJob = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    salary: "",
    description: "",
    requirements: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.title || !formData.company || !formData.description) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Job posted successfully!");
      
      // Reset form and navigate to homepage
      setFormData({
        title: "",
        company: "",
        location: "",
        type: "Full-time",
        salary: "",
        description: "",
        requirements: "",
      });
      
      navigate("/");
    }, 1500);
  };
  
  return (
    <AppLayout>
      <div className="relative pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-transparent -z-10" />
        
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center space-y-3 animate-slide-down">
            <h1 className="text-3xl md:text-4xl font-display font-semibold">
              Post a New Job
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Fill out the form below to post a new job listing. All fields marked with an asterisk (*) are required.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container max-w-3xl mx-auto px-4 py-10">
        <div className="glass-card rounded-xl p-6 md:p-8 animate-scale-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="title" className="block text-sm font-medium">
                  Job Title <span className="text-destructive">*</span>
                </label>
                <input 
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Senior Frontend Developer"
                  className={cn(
                    "w-full px-4 py-2.5 rounded-lg",
                    "border border-input bg-background",
                    "focus:outline-none focus:ring-2 focus:ring-primary/20"
                  )}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium">
                  Company Name <span className="text-destructive">*</span>
                </label>
                <input 
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Acme Inc."
                  className={cn(
                    "w-full px-4 py-2.5 rounded-lg",
                    "border border-input bg-background",
                    "focus:outline-none focus:ring-2 focus:ring-primary/20"
                  )}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="location" className="block text-sm font-medium">
                  Location <span className="text-destructive">*</span>
                </label>
                <input 
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. San Francisco, CA (Remote)"
                  className={cn(
                    "w-full px-4 py-2.5 rounded-lg",
                    "border border-input bg-background",
                    "focus:outline-none focus:ring-2 focus:ring-primary/20"
                  )}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="salary" className="block text-sm font-medium">
                  Salary Range
                </label>
                <input 
                  type="text"
                  id="salary"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  placeholder="e.g. $80,000 - $120,000"
                  className={cn(
                    "w-full px-4 py-2.5 rounded-lg",
                    "border border-input bg-background",
                    "focus:outline-none focus:ring-2 focus:ring-primary/20"
                  )}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="type" className="block text-sm font-medium">
                  Job Type <span className="text-destructive">*</span>
                </label>
                <select 
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-2.5 rounded-lg",
                    "border border-input bg-background",
                    "focus:outline-none focus:ring-2 focus:ring-primary/20"
                  )}
                  required
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-medium">
                Job Description <span className="text-destructive">*</span>
              </label>
              <textarea 
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the role, responsibilities, and ideal candidate..."
                rows={6}
                className={cn(
                  "w-full px-4 py-2.5 rounded-lg",
                  "border border-input bg-background",
                  "focus:outline-none focus:ring-2 focus:ring-primary/20"
                )}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="requirements" className="block text-sm font-medium">
                Requirements
              </label>
              <textarea 
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="List the requirements for the position, one per line..."
                rows={4}
                className={cn(
                  "w-full px-4 py-2.5 rounded-lg",
                  "border border-input bg-background",
                  "focus:outline-none focus:ring-2 focus:ring-primary/20"
                )}
              />
            </div>
            
            <div className="flex items-start p-4 border border-input rounded-lg bg-secondary/30">
              <Info size={20} className="text-muted-foreground shrink-0 mt-0.5 mr-3" />
              <p className="text-sm text-muted-foreground">
                This is a demo application. In a real application, your job post would be saved to a database and might require approval before publishing.
              </p>
            </div>
            
            <div className="flex justify-end gap-3 pt-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate("/")}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                loading={isSubmitting}
                iconLeft={<Briefcase size={16} />}
              >
                Post Job
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  );
};

export default PostJob;
