import { Component , Input , Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-admin-users-list',
  imports: [],
  templateUrl: './admin-users-list.html',
  styleUrl: './admin-users-list.css',
})
export class AdminUsersList {
  @Input() users: User[] = [];
  @Input() selectedUserId: number | null = null;

  @Output() userSelected = new EventEmitter<User>();

  select(user: User) {
    this.userSelected.emit(user);
  }
}
