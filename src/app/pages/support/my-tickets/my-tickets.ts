import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MyTicket {
  id: string;
  subject: string;
  category: string;
  date: string;
  status: 'Open' | 'In Progress' | 'Resolved';
}

@Component({
  selector: 'app-my-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-tickets.html',
  styleUrl: './my-tickets.css'
})
export class MyTickets {
  @Input() tickets: MyTicket[] = [
    { id: '#4821', subject: 'Match score not updating after profile edit', category: 'Bug', date: 'Jun 10', status: 'In Progress' },
    { id: '#4798', subject: 'Request: export mock interview transcript', category: 'Feature request', date: 'Jun 6', status: 'Open' },
    { id: '#4712', subject: 'Billing — annual plan invoice', category: 'Billing', date: 'May 28', status: 'Resolved' },
  ];

  statusClass(status: string): string {
    return 'status-badge status-badge--' + status.toLowerCase().replace(' ', '-');
  }
}