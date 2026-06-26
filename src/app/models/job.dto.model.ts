export interface JobDto {
  id: number;
  title: string;
  companyName: string;
  location: string;
  workType: string;
  workTime: string;
  description: string;
  briefDescription: string | null;
  salaryMin: number;
  salaryMax: number;
  postedAt: string;
  jobUrl: string;
  sourcePlatform: string;
}