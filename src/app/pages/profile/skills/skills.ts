import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skills: string[] = [
    'React', 'TypeScript', 'JavaScript', 'CSS Architecture',
    'Node.js', 'Jest', 'Figma', 'Accessibility', 'GraphQL', 'Webpack'
  ];

  newSkill = '';

  addSkill() {
    const trimmed = this.newSkill.trim();
    if (trimmed && !this.skills.includes(trimmed)) {
      this.skills.push(trimmed);
      this.newSkill = '';
    }
  }

  removeSkill(skill: string) {
    this.skills = this.skills.filter(s => s !== skill);
  }
}