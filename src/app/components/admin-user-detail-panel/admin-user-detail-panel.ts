import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-admin-user-detail-panel',
  imports: [],
  templateUrl: './admin-user-detail-panel.html',
  styleUrl: './admin-user-detail-panel.css',
})
export class AdminUserDetailPanel {
  @Input() user: User | null = null;

  
}
