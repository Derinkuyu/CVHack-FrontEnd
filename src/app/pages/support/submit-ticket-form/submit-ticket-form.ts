import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-submit-ticket-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './submit-ticket-form.html',
  styleUrl: './submit-ticket-form.css'
})
export class SubmitTicketForm {
  @Output() ticketSubmit = new EventEmitter<{subject: string, category: string, description: string}>();

  subject = '';
  category = 'Technical issue';
  description = '';

  categories = ['Technical issue', 'Billing', 'Feature request', 'Account', 'Other'];

  onSubmit() {
    if (!this.subject.trim() || !this.description.trim()) return;

    this.ticketSubmit.emit({
      subject: this.subject,
      category: this.category,
      description: this.description
    });

    this.subject = '';
    this.description = '';
    this.category = 'Technical issue';
  }
}