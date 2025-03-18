
import { FC, ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Briefcase, PlusCircle } from "lucide-react";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle initial animation
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Handle scroll detection for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Navigation items
  const navItems = [
    { label: "Jobs", path: "/", icon: <Briefcase size={16} /> },
    { label: "Post Job", path: "/post-job", icon: <PlusCircle size={16} /> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header 
        className={cn(
          "sticky top-0 z-40 w-full",
          "transition-all duration-300 ease-out",
          isScrolled 
            ? "bg-background/80 backdrop-blur-lg border-b border-border/40 shadow-sm" 
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 font-display transition-colors hover:text-primary"
          >
            <div className="h-8 w-8 rounded-md bg-primary text-white flex items-center justify-center">
              <Briefcase size={18} />
            </div>
            <span className="font-semibold text-lg">CareerHub</span>
          </Link>
          
          {/* Navigation */}
          <nav className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 text-sm rounded-lg flex items-center gap-1.5",
                  "transition-all duration-200",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      
      {/* Main content */}
      <main 
        className={cn(
          "flex-1 transition-opacity",
          mounted ? "opacity-100" : "opacity-0"
        )}
      >
        {children}
      </main>
      
      {/* Footer */}
      <footer className="py-6 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CareerHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
