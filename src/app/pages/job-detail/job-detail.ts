import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { JobHeader, JobHeaderData } from './components/job-header/job-header';
import { JobAbout, JobAboutData } from './components/job-about/job-about';
import { AiMatchCard, AiMatchData } from './components/ai-match-card/ai-match-card';
import { CompanyBriefing, CompanyBriefingData } from './components/company-briefing/company-briefing';
import { JobActions } from './components/job-actions/job-actions';
import { JobsService } from '../../services/jobs.service';
import { Job } from '../../models/job.model';

@Component({
  selector: 'app-job-detail',
  imports: [Navbar, JobHeader, JobAbout, AiMatchCard, CompanyBriefing, JobActions],
  templateUrl: './job-detail.html',
  styleUrl: './job-detail.css',
})
export class JobDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private jobsService = inject(JobsService);
  private cdr = inject(ChangeDetectorRef);
  loading = true;
  error = '';
  job: Job | null = null;
  header!: JobHeaderData;
  about!: JobAboutData;
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
  async ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
    try {
      this.job = await this.jobsService.getById(id);
      console.log('Job data:', this.job);
      if (this.job) {
        this.header = {
          companyInitials: this.job.company.substring(0, 2).toUpperCase(), // ✅
          title: this.job.title,
          companyName: this.job.company, // ✅
          location: this.job.location, // ✅ موجودة في الـ model
          postedAt: this.job.postedAgo, // ✅
          tags: this.job.tags, // ✅ موجودة في الـ model
          salary: `EGP ${(this.job.salaryMin / 1000).toFixed(0)}k – ${(this.job.salaryMax / 1000).toFixed(0)}k/mo`,
        };
        this.about = {
          description: this.job.description,
          responsibilities: [
            'Own the architecture and delivery of core product features end to end.',
            'Collaborate closely with design and product to ship polished, accessible interfaces.',
            'Set technical direction and mentor engineers across the team.',
            'Drive quality through testing, code review and thoughtful trade-offs.',
          ],
          requirements: [
            '5+ years building production software',
            `Deep expertise in ${this.job.title.split(' ')[0]} and related technologies`,
            'Strong product sense and communication skills',
            'Comfortable in a fast-moving, remote environment',
          ],
        };
      } else {
        this.error = 'Job not found.';
      }
    } catch (err) {
      console.error('Component error:', err);
      this.error = 'Something went wrong.';
    } finally {
      this.loading = false;
      this.cdr.detectChanges();
    }
  }
  getPostedAt(dateStr: string): string {
    const diff = Date.now() - new Date(dateStr).getTime();
    const hours = Math.floor(diff / 3600000);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  }
}