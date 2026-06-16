import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectItem {
  name: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projectsList: ProjectItem[] = [
    {
      name: 'E-Commerce Dashboard',
      description: 'A full-featured admin dashboard with analytics, order management, and inventory tracking.',
      tags: ['React', 'TypeScript', 'Tailwind']
    },
    {
      name: 'Job Portal Platform',
      description: 'A platform connecting job seekers with employers, featuring AI-based job matching.',
      tags: ['Angular', '.NET', 'SQL Server']
    }
  ];

  addProject() {
    console.log('Add project clicked');
  }

  removeProject(index: number) {
    this.projectsList.splice(index, 1);
  }
}