import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({ 
  value, 
  onChange, 
  placeholder = "Search for jobs...", 
  className 
}: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [localValue, setLocalValue] = useState(value);

  // Keep local state in sync with prop value
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      if (localValue !== value) {
        onChange(localValue);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [localValue, onChange, value]);

  return (
    <div 
      className={cn(
        "relative w-full transition-all duration-300",
        "group",
        className
      )}
    >
      <div 
        className={cn(
          "absolute inset-y-0 left-3 flex items-center pointer-events-none",
          "transition-all duration-300 ease-spring",
          isFocused ? "text-primary" : "text-muted-foreground"
        )}
      >
        <Search size={20} />
      </div>
      <input
        type="text"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          "w-full pl-10 pr-4 py-3 rounded-full",
          "bg-background border border-input",
          "focus:ring-2 focus:ring-primary/20 focus:outline-none",
          "transition-all duration-300",
          "placeholder:text-muted-foreground"
        )}
      />
      {localValue && (
        <button
          onClick={() => {
            setLocalValue("");
            onChange("");
          }}
          className={cn(
            "absolute inset-y-0 right-3 flex items-center",
            "text-muted-foreground hover:text-foreground",
            "transition-all duration-200"
          )}
          aria-label="Clear search"
        >
          <span className="sr-only">Clear</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
