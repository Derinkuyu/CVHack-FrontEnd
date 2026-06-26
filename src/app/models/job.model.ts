export interface Job {
  id: number;
  initials: string;
  title: string;
  company: string;
  location: string;
  postedAgo: string;
  tags: string[];
  salaryMin: number;
  salaryMax: number;
  matchScore: number;
  description: string;       
  briefDescription: string;   
}