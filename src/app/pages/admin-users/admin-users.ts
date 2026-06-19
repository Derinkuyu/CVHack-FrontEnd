import { Component } from '@angular/core';
import { AdminSidebar } from '../../components/admin-sidebar/admin-sidebar';
import { AdminUsersHeader } from "../../components/admin-users-header/admin-users-header";
import { AdminUserDetailPanel } from '../../components/admin-user-detail-panel/admin-user-detail-panel';
import { AdminUsersList } from '../../components/admin-users-list/admin-users-list';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-admin-users',
  imports: [AdminSidebar, AdminUsersHeader , AdminUsersList , AdminUserDetailPanel],
  templateUrl: './admin-users.html',
  styleUrl: './admin-users.css',
})
export class AdminUsers {
  allUsers: User[] = [
  { id: 1, initials: 'YH', name: 'Youssef Hassan', email: 'youssef.h@email.com', role: 'User', plan: 'Pro', status: 'Active', joined: 'Jan 2024', searches: 112 },
  { id: 2, initials: 'NA', name: 'Nour Adel', email: 'nour.a@email.com', role: 'User', plan: 'Free', status: 'Active', joined: 'Mar 2024', searches: 64 },
  { id: 3, initials: 'KM', name: 'Khaled Mostafa', email: 'khaled.m@email.com', role: 'User', plan: 'Free', status: 'Active', joined: 'Feb 2024', searches: 8 },
  { id: 4, initials: 'MS', name: 'Mariam Saad', email: 'mariam.s@email.com', role: 'User', plan: 'Pro', status: 'Suspended', joined: 'Apr 2024', searches: 91 },
  { id: 5, initials: 'OT', name: 'Omar Tarek', email: 'omar.t@email.com', role: 'User', plan: 'Free', status: 'Active', joined: 'May 2024', searches: 30 },
  { id: 6, initials: 'SF', name: 'Salma Fahmy', email: 'salma.f@email.com', role: 'Admin', plan: 'Free', status: 'Active', joined: 'Jun 2024', searches: 14 },

  { id: 7, initials: 'YH', name: 'Youssef Hassan', email: 'youssef.h@email.com', role: 'User', plan: 'Pro', status: 'Active', joined: 'Jan 2024', searches: 112 },
  { id: 8, initials: 'NA', name: 'Nour Adel', email: 'nour.a@email.com', role: 'User', plan: 'Free', status: 'Active', joined: 'Mar 2024', searches: 64 },
  { id: 9, initials: 'KM', name: 'Khaled Mostafa', email: 'khaled.m@email.com', role: 'User', plan: 'Free', status: 'Active', joined: 'Feb 2024', searches: 8 },
  { id: 10, initials: 'MS', name: 'Mariam Saad', email: 'mariam.s@email.com', role: 'User', plan: 'Pro', status: 'Suspended', joined: 'Apr 2024', searches: 91 },
  { id: 11, initials: 'OT', name: 'Omar Tarek', email: 'omar.t@email.com', role: 'User', plan: 'Free', status: 'Active', joined: 'May 2024', searches: 30 },
  { id: 12, initials: 'SF', name: 'Salma Fahmy', email: 'salma.f@email.com', role: 'Admin', plan: 'Free', status: 'Active', joined: 'Jun 2024', searches: 14 },

  { id: 13, initials: 'YH', name: 'Youssef Hassan', email: 'youssef.h@email.com', role: 'User', plan: 'Pro', status: 'Active', joined: 'Jan 2024', searches: 112 },
  { id: 14, initials: 'NA', name: 'Nour Adel', email: 'nour.a@email.com', role: 'User', plan: 'Free', status: 'Active', joined: 'Mar 2024', searches: 64 },
  { id: 15, initials: 'KM', name: 'Khaled Mostafa', email: 'khaled.m@email.com', role: 'User', plan: 'Free', status: 'Active', joined: 'Feb 2024', searches: 8 },
  { id: 16, initials: 'MS', name: 'Mariam Saad', email: 'mariam.s@email.com', role: 'User', plan: 'Pro', status: 'Suspended', joined: 'Apr 2024', searches: 91 },
  { id: 17, initials: 'OT', name: 'Omar Tarek', email: 'omar.t@email.com', role: 'User', plan: 'Free', status: 'Active', joined: 'May 2024', searches: 30 },
  { id: 18, initials: 'SF', name: 'Salma Fahmy', email: 'salma.f@email.com', role: 'Admin', plan: 'Free', status: 'Active', joined: 'Jun 2024', searches: 14 },

  { id: 19, initials: 'YH', name: 'Youssef Hassan', email: 'youssef.h@email.com', role: 'User', plan: 'Pro', status: 'Active', joined: 'Jan 2024', searches: 112 },
  { id: 20, initials: 'NA', name: 'Nour Adel', email: 'nour.a@email.com', role: 'User', plan: 'Free', status: 'Active', joined: 'Mar 2024', searches: 64 },
  { id: 21, initials: 'KM', name: 'Khaled Mostafa', email: 'khaled.m@email.com', role: 'User', plan: 'Free', status: 'Active', joined: 'Feb 2024', searches: 8 },
  { id: 22, initials: 'MS', name: 'Mariam Saad', email: 'mariam.s@email.com', role: 'User', plan: 'Pro', status: 'Suspended', joined: 'Apr 2024', searches: 91 },
  { id: 23, initials: 'OT', name: 'Omar Tarek', email: 'omar.t@email.com', role: 'User', plan: 'Free', status: 'Active', joined: 'May 2024', searches: 30 },
  { id: 24, initials: 'SF', name: 'Salma Fahmy', email: 'salma.f@email.com', role: 'Admin', plan: 'Free', status: 'Active', joined: 'Jun 2024', searches: 14 },

  { id: 25, initials: 'YH', name: 'Youssef Hassan', email: 'youssef.h@email.com', role: 'User', plan: 'Pro', status: 'Active', joined: 'Jan 2024', searches: 112 },
  { id: 26, initials: 'NA', name: 'Nour Adel', email: 'nour.a@email.com', role: 'User', plan: 'Free', status: 'Active', joined: 'Mar 2024', searches: 64 },
  { id: 27, initials: 'KM', name: 'Khaled Mostafa', email: 'khaled.m@email.com', role: 'User', plan: 'Free', status: 'Active', joined: 'Feb 2024', searches: 8 },
  { id: 28, initials: 'MS', name: 'Mariam Saad', email: 'mariam.s@email.com', role: 'User', plan: 'Pro', status: 'Suspended', joined: 'Apr 2024', searches: 91 },
  { id: 29, initials: 'OT', name: 'Omar Tarek', email: 'omar.t@email.com', role: 'User', plan: 'Free', status: 'Active', joined: 'May 2024', searches: 30 },
  { id: 30, initials: 'SF', name: 'Salma Fahmy', email: 'salma.f@email.com', role: 'Admin', plan: 'Free', status: 'Active', joined: 'Jun 2024', searches: 14 },
];

  filteredUsers: User[] = this.allUsers;
  selectedUser: User | null = null; 

  onSearch(term: string) {
    const q = term.toLowerCase();
    this.filteredUsers = this.allUsers.filter(u =>
      u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
    );
  }

  onUserSelected(user: User) {
    this.selectedUser = user;
  }

  
}
