import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../tickets-list/tickets-list';

@Component({
  selector: 'app-ticket-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket-detail.html',
  styleUrl: './ticket-detail.css'
})
export class TicketDetail {
  @Input() ticket: Ticket | null = null;
  @Input() priority: string = 'High';
  @Input() category: string = 'Bug';
  @Input() description: string = '';

  replyText = '';

  sendReply() {
    if (!this.replyText.trim()) return;
    console.log('Sending reply:', this.replyText);
    // TODO: ربطها بالـ API لاحقًا
    this.replyText = '';
  }

  statusClass(status: string): string {
    return 'status-badge status-badge--' + status.toLowerCase().replace(' ', '-');
  }
}