import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsList, Ticket } from './tickets-list/tickets-list';
import { TicketDetail } from './ticket-detail/ticket-detail';

@Component({
  selector: 'app-admin-tickets',
  standalone: true,
  imports: [CommonModule, TicketsList, TicketDetail],
  templateUrl: './admin-tickets.html',
  styleUrl: './admin-tickets.css'
})
export class AdminTickets {
  selectedTicket: Ticket | null = {
    id: 'T-1042',
    subject: 'Match score not updating after profile edit',
    user: 'Youssef Hassan',
    date: 'Jun 10',
    status: 'In Progress'
  };

  ticketDescription = 'After I update my skills the match score on saved jobs does not refresh until I log out and back in.';

  onTicketSelect(ticket: Ticket) {
    this.selectedTicket = ticket;
  }
}