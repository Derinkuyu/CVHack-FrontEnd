import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitTicketForm } from './submit-ticket-form/submit-ticket-form';
import { MyTickets, MyTicket } from './my-tickets/my-tickets';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule, SubmitTicketForm, MyTickets, Navbar],
  templateUrl: './support.html',
  styleUrl: './support.css'
})
export class Support {
  onTicketSubmit(ticketData: {subject: string, category: string, description: string}) {
    console.log('New ticket submitted:', ticketData);
    // TODO: ربطها بالـ API لاحقًا
  }
}