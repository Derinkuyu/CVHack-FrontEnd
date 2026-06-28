import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-actions',
  imports: [],
  templateUrl: './job-actions.html',
  styleUrl: './job-actions.css',
})
export class JobActions {
  @Input() jobId!: number;
  @Input() jobUrl!: string;

  constructor(private router: Router) {}

  startMockInterview() {
    this.router.navigate(['/mock-interview']);
  }

  applyNow() {
  window.open(`/jobs/${this.jobId}`, '_blank');
}
}