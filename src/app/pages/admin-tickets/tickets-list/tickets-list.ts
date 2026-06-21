import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Ticket {
  id: string;
  subject: string;
  user: string;
  date: string;
  status: 'Open' | 'In Progress' | 'Resolved';
}

@Component({
  selector: 'app-tickets-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tickets-list.html',
  styleUrl: './tickets-list.css'
})
export class TicketsList {
  @Input() selectedTicketId: string = '';
  @Output() ticketSelect = new EventEmitter<Ticket>();

  filters = ['All', 'Open', 'In Progress', 'Resolved'];
  activeFilter = 'All';

  tickets: Ticket[] = [
    { id: 'T-1042', subject: 'Match score not updating after profile edit', user: 'Youssef Hassan', date: 'Jun 10', status: 'In Progress' },
    { id: 'T-1041', subject: 'Export mock interview transcript', user: 'Nour Adel', date: 'Jun 9', status: 'Open' },
    { id: 'T-1039', subject: 'Annual plan invoice missing VAT', user: 'Khaled Mostafa', date: 'Jun 8', status: 'Open' },
    { id: 'T-1035', subject: 'Cannot upload CV (PDF over 5MB)', user: 'Mariam Saad', date: 'Jun 5', status: 'Resolved' },
    { id: 'T-1031', subject: 'Dark mode resets on reload', user: 'Omar Tarek', date: 'Jun 3', status: 'Resolved' },
  ];

  get filteredTickets(): Ticket[] {
    if (this.activeFilter === 'All') return this.tickets;
    return this.tickets.filter(t => t.status === this.activeFilter);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  selectTicket(ticket: Ticket) {
    this.ticketSelect.emit(ticket);
  }

  statusClass(status: string): string {
    return 'status-badge status-badge--' + status.toLowerCase().replace(' ', '-');
  }
}