import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceItem {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  experienceList: ExperienceItem[] = [
    {
      title: 'Senior Frontend Engineer',
      company: 'TechCorp',
      startDate: '2022',
      endDate: 'Present',
      description: 'Leading the frontend team in building scalable web applications using React and TypeScript.'
    },
    {
      title: 'Frontend Developer',
      company: 'WebSolutions',
      startDate: '2019',
      endDate: '2022',
      description: 'Built and maintained client-facing dashboards and component libraries.'
    }
  ];

  addExperience() {
    console.log('Add experience clicked');
  }

  removeExperience(index: number) {
    this.experienceList.splice(index, 1);
  }
}