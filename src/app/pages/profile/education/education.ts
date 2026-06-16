import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EducationItem {
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {
  educationList: EducationItem[] = [
    {
      degree: 'M.Sc. Computer Science',
      institution: 'Cairo University',
      startYear: '2015',
      endYear: '2017'
    },
    {
      degree: 'B.Sc. Computer Engineering',
      institution: 'Ain Shams University',
      startYear: '2012',
      endYear: '2015'
    }
  ];

  addEducation() {
    // TODO: فتح فورم/modal لإضافة تعليم جديد
    console.log('Add education clicked');
  }

  removeEducation(index: number) {
    this.educationList.splice(index, 1);
  }
}