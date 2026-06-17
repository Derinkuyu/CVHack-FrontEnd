import { Component } from '@angular/core';
import { AdminSidebar } from '../../components/admin-sidebar/admin-sidebar';

@Component({
  selector: 'app-admin-tickets',
  imports: [AdminSidebar],
  templateUrl: './admin-tickets.html',
  styleUrl: './admin-tickets.css',
})
export class AdminTickets {}
