import { Component } from '@angular/core';

@Component({
  selector: 'app-job-actions',
  imports: [],
  templateUrl: './job-actions.html',
  styleUrl: './job-actions.css',
})
export class JobActions {
  startMockInterview() {
    console.log('Start mock interview clicked');
  }

  applyNow() {
    console.log('Apply now clicked');
  }
}
