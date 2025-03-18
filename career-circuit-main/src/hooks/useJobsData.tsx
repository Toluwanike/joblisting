
import { useState, useEffect, useMemo } from 'react';
import { Job, jobsData } from '../data/jobs';

interface UseJobsOptions {
  initialSearchTerm?: string;
  itemsPerPage?: number;
}

export function useJobsData({ initialSearchTerm = '', itemsPerPage = 6 }: UseJobsOptions = {}) {
  // State
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Filtered jobs based on search term
  const filteredJobs = useMemo(() => {
    if (!searchTerm.trim()) return jobsData;
    
    const lowerCaseSearch = searchTerm.toLowerCase();
    return jobsData.filter(job => 
      job.title.toLowerCase().includes(lowerCaseSearch) || 
      job.company.toLowerCase().includes(lowerCaseSearch) || 
      job.shortDescription.toLowerCase().includes(lowerCaseSearch) ||
      job.location.toLowerCase().includes(lowerCaseSearch)
    );
  }, [searchTerm]);

  // Calculate pagination
  const totalJobs = filteredJobs.length;
  const totalPages = Math.ceil(totalJobs / itemsPerPage);
  
  // Get current page of jobs
  const currentJobs = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredJobs.slice(startIndex, endIndex);
  }, [filteredJobs, currentPage, itemsPerPage]);

  // Simulate loading state for a smoother UX
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [searchTerm, currentPage]);

  // Find a specific job by ID
  const findJobById = (id: string): Job | undefined => {
    return jobsData.find(job => job.id === id);
  };

  // Load more jobs function
  const loadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  // Reset pagination when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return {
    jobs: currentJobs,
    isLoading,
    searchTerm,
    setSearchTerm,
    loadMore,
    hasMore: currentPage < totalPages,
    totalJobs,
    findJobById,
  };
}
