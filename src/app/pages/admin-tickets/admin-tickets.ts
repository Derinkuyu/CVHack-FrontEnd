import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsList } from './tickets-list/tickets-list';
import { TicketDetail } from './ticket-detail/ticket-detail';
import { AdminTicket } from '../../services/admin-tickets';
import { AdminSidebar } from '../../components/admin-sidebar/admin-sidebar';

@Component({
  selector: 'app-admin-tickets',
  standalone: true,
  imports: [CommonModule, TicketsList, TicketDetail, AdminSidebar],
  templateUrl: './admin-tickets.html',
  styleUrl: './admin-tickets.css'
})
export class AdminTickets {
  selectedTicket: AdminTicket | null = null;

  onTicketSelect(ticket: AdminTicket) {
    this.selectedTicket = ticket;
  }
}