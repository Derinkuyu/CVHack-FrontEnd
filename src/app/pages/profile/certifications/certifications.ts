import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css'
})
export class Certifications {
  certificationsList: CertificationItem[] = [
    { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'Professional Scrum Master I', issuer: 'Scrum.org', year: '2021' }
  ];

  addCertification() {
    console.log('Add certification clicked');
  }

  removeCertification(index: number) {
    this.certificationsList.splice(index, 1);
  }
}