import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { JobHeader, JobHeaderData } from './components/job-header/job-header';
import { JobAbout, JobAboutData } from './components/job-about/job-about';
import { AiMatchCard, AiMatchData } from './components/ai-match-card/ai-match-card';
import { CompanyBriefing, CompanyBriefingData } from './components/company-briefing/company-briefing';
import { JobActions } from './components/job-actions/job-actions';

@Component({
  selector: 'app-job-detail',
  imports: [Navbar, JobHeader, JobAbout, AiMatchCard, CompanyBriefing, JobActions],
  templateUrl: './job-detail.html',
  styleUrl: './job-detail.css',
})
export class JobDetail {
  // Dummy data — replace with data fetched from the API based on the job id route param
  header: JobHeaderData = {
    companyInitials: 'NL',
    title: 'Senior Frontend Engineer',
    companyName: 'Nile Logic',
    location: 'New Cairo, Egypt',
    postedAt: '2h ago',
    tags: ['Remote', 'Full-time', 'Senior'],
    salary: 'EGP 55k – 75k/mo',
  };

  about: JobAboutData = {
    description:
      'Nile Logic is a 120–250 person Data Analytics company founded in 2016. Build the next generation of our analytics platform with React, TypeScript and a modern internal design system. You will own the component architecture end to end. You will join a tight-knit team that values craft, autonomy and shipping work that matters.',
    responsibilities: [
      'Own the architecture and delivery of core product features end to end.',
      'Collaborate closely with design and product to ship polished, accessible interfaces.',
      'Set technical direction and mentor engineers across the team.',
      'Drive quality through testing, code review and thoughtful trade-offs.',
    ],
    requirements: [
      '5+ years building production data analytics software',
      'Deep expertise in React and TypeScript',
      'Strong product sense and communication skills',
      'Comfortable in a fast-moving, remote environment',
    ],
  };

  aiMatch: AiMatchData = {
    score: 92,
    summary: "Your profile aligns well with this role's core requirements.",
    skills: [
      { name: 'React', percent: 95, status: 'good' },
      { name: 'TypeScript', percent: 88, status: 'good' },
      { name: 'CSS Architecture', percent: 82, status: 'good' },
      { name: 'Testing', percent: 78, status: 'good' },
      { name: 'GraphQL', percent: 34, status: 'gap' },
      { name: 'Rust / WASM', percent: 22, status: 'gap' },
    ],
    gapSkills: ['GraphQL', 'Rust / WASM'],
  };

  companyBriefing: CompanyBriefingData = {
    staffRange: '120–250',
    founded: '2016',
    facts: [
      'Series B — raised $12M in early 2024',
      'Engineering-led culture, ships to production weekly',
      'Top-rated employer on Wuzzuf · strong work–life balance',
      'Remote-first across Egypt & MENA time zones',
    ],
  };
}
