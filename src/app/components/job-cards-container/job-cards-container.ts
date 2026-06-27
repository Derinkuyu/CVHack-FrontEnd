import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JobCard } from '../job-card/job-card';
import { FormsModule } from '@angular/forms';
import type { Job } from '../../models/job.model';
import { JobFilters } from '../../models/job-filters.model';
import { FilterIcon } from '../../assets/filter-icon/filter-icon';

@Component({
  selector: 'app-job-cards-container',
  imports: [JobCard, FormsModule,FilterIcon],
  templateUrl: './job-cards-container.html',
  styleUrl: './job-cards-container.css',
})
export class JobCardsContainer {
  @Input() activeFilters: JobFilters | null = null;
  @Input() jobs: Job[] = [];
  @Input() searchTerm = '';
  @Output() openFilters = new EventEmitter<void>();

  sortOptions = ['Best match', 'Most recent', 'Highest salary'];
  selectedSort = 'Best match';

  private dateLimits: Record<string, number> = {
    'Past 24h': 24,
    'Past week': 24 * 7,
    'Past month': 24 * 30,
  };

  // jobs: Job[] = [
  //   {
  //     id: 1,
  //     initials: 'NL',
  //     title: 'Senior Frontend Engineer',
  //     company: 'Nile Logic',
  //     location: 'New Cairo, Egypt',
  //     postedAgo: '2h ago',
  //     tags: ['Remote', 'Full-time', 'Senior'],
  //     salaryMin: 55,
  //     salaryMax: 75,
  //     matchScore: 92,
  //     description:
  //       'Build the next generation of our analytics platform with React, TypeScript and a modern internal design system. You will own the component architecture end to end.',
  //   },
  //   {
  //     id: 2,
  //     initials: 'TC',
  //     title: 'Backend Engineer',
  //     company: 'TechCorp',
  //     location: 'Cairo, Egypt',
  //     postedAgo: '1d ago',
  //     tags: ['On-site', 'Full-time', 'Mid-level'],
  //     salaryMin: 30,
  //     salaryMax: 45,
  //     matchScore: 65,
  //     description:
  //       'Join our backend team to build scalable APIs and microservices using Node.js and PostgreSQL.',
  //   },
  //   {
  //     id: 3,
  //     initials: 'DS',
  //     title: 'UI/UX Designer',
  //     company: 'Design Studio',
  //     location: 'Alexandria, Egypt',
  //     postedAgo: '5h ago',
  //     tags: ['Hybrid', 'Full-time', 'Mid-level'],
  //     salaryMin: 25,
  //     salaryMax: 40,
  //     matchScore: 81,
  //     description:
  //       'Create modern user experiences and collaborate closely with product managers and developers.',
  //   },
  //   {
  //     id: 4,
  //     initials: 'AI',
  //     title: 'AI Engineer',
  //     company: 'AIVision',
  //     location: 'Smart Village, Egypt',
  //     postedAgo: '3d ago',
  //     tags: ['Remote', 'Full-time', 'Senior'],
  //     salaryMin: 60,
  //     salaryMax: 90,
  //     matchScore: 88,
  //     description:
  //       'Develop and optimize machine learning pipelines and AI-powered applications.',
  //   },
  //   {
  //     id: 5,
  //     initials: 'FS',
  //     title: 'Full Stack Developer',
  //     company: 'FutureSoft',
  //     location: 'Giza, Egypt',
  //     postedAgo: '6h ago',
  //     tags: ['Hybrid', 'Full-time', 'Junior'],
  //     salaryMin: 20,
  //     salaryMax: 35,
  //     matchScore: 73,
  //     description:
  //       'Work on both frontend and backend systems using Angular, .NET Core, and SQL Server.',
  //   },
  //   {
  //     id: 6,
  //     initials: 'CM',
  //     title: 'Cloud DevOps Engineer',
  //     company: 'CloudMatrix',
  //     location: 'Remote',
  //     postedAgo: '12h ago',
  //     tags: ['Remote', 'Contract', 'Senior'],
  //     salaryMin: 50,
  //     salaryMax: 80,
  //     matchScore: 84,
  //     description:
  //       'Manage CI/CD pipelines, Kubernetes clusters, and cloud infrastructure on Azure.',
  //   },
  //   {
  //     id: 7,
  //     initials: 'MG',
  //     title: 'Mobile App Developer',
  //     company: 'MobileGen',
  //     location: 'Mansoura, Egypt',
  //     postedAgo: '2d ago',
  //     tags: ['On-site', 'Full-time', 'Mid-level'],
  //     salaryMin: 28,
  //     salaryMax: 42,
  //     matchScore: 70,
  //     description:
  //       'Build high-performance mobile applications using Flutter and Firebase.',
  //   },
  //   {
  //     id: 8,
  //     initials: 'SX',
  //     title: 'Cybersecurity Analyst',
  //     company: 'SecureX',
  //     location: 'Cairo, Egypt',
  //     postedAgo: '4d ago',
  //     tags: ['Hybrid', 'Full-time', 'Senior'],
  //     salaryMin: 45,
  //     salaryMax: 70,
  //     matchScore: 79,
  //     description:
  //       'Monitor infrastructure security, investigate threats, and improve system protection.',
  //   },
  //   {
  //     id: 9,
  //     initials: 'DT',
  //     title: 'Data Analyst',
  //     company: 'DataTrack',
  //     location: 'New Capital, Egypt',
  //     postedAgo: '8h ago',
  //     tags: ['Remote', 'Part-time', 'Junior'],
  //     salaryMin: 18,
  //     salaryMax: 30,
  //     matchScore: 68,
  //     description:
  //       'Analyze business data and create dashboards and reports using Power BI and SQL.',
  //   },
  //   {
  //     id: 10,
  //     initials: 'PX',
  //     title: 'Product Manager',
  //     company: 'PixelWorks',
  //     location: 'Cairo, Egypt',
  //     postedAgo: '1w ago',
  //     tags: ['Hybrid', 'Full-time', 'Senior'],
  //     salaryMin: 55,
  //     salaryMax: 85,
  //     matchScore: 75,
  //     description:
  //       'Lead cross-functional teams to deliver innovative digital products and features.',
  //   },
  // ];


  get filteredJobs(): Job[] {
    const term = this.searchTerm.trim().toLowerCase();
    const f = this.activeFilters;

    return this.jobs.filter((job) => {
      // text search
      const matchesSearch =
        !term ||
        job.title.toLowerCase().includes(term) ||
        job.company.toLowerCase().includes(term) ||
        job.location.toLowerCase().includes(term) ||
        job.tags.some((t) => t.toLowerCase().includes(term));
      if (!matchesSearch) return false;

      // sidebar filters
      if (!f) return true;
      return (
        (!f.country || job.country === f.country) &&
        (!f.city || job.city === f.city) &&
        (f.workType.length === 0 || f.workType.includes(job.workType)) &&
        (f.employment.length === 0 || f.employment.includes(job.workTime)) &&
        (f.seniority.length === 0 || f.seniority.includes(job.seniority)) &&
        job.salaryMax >= f.minSalary &&
        (f.datePosted === 'Any time' ||
          this.parsePostedAgo(job.postedAgo) <= this.dateLimits[f.datePosted])
      );
    });
  }

  get sortedJobs(): Job[] {
    const list = [...this.filteredJobs];

    switch (this.selectedSort) {
      case 'Best match':
        return list.sort((a, b) => b.matchScore - a.matchScore);

      case 'Highest salary':
        return list.sort((a, b) => b.salaryMax - a.salaryMax);

      case 'Most recent':
        return list.sort((a, b) => this.parsePostedAgo(a.postedAgo) - this.parsePostedAgo(b.postedAgo));

      default:
        return list;
    }
  }

  // Converts "2h ago", "1d ago", "1w ago" into a comparable number of hours
  private parsePostedAgo(value: string): number {
    const match = value.match(/(\d+)([hdw])/);
    if (!match) return Infinity;

    const num = Number(match[1]);
    const unit = match[2];

    if (unit === 'h') return num;
    if (unit === 'd') return num * 24;
    if (unit === 'w') return num * 24 * 7;
    return Infinity;
  }
}