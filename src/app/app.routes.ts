import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Auth
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then((c) => c.Login),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register').then((c) => c.Register),
  },

  // User pages
  {
    path: 'jobs',
    loadComponent: () =>
      import('./pages/job-search/job-search').then((c) => c.JobSearch),
  },
  {
    path: 'jobs/:id',
    loadComponent: () =>
      import('./pages/job-detail/job-detail').then((c) => c.JobDetail),
  },
  {
    path: 'mock-interview',
    loadComponent: () =>
      import('./pages/mock-interview/mock-interview').then((c) => c.MockInterview),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile/profile').then((c) => c.Profile),
  },
  {
    path: 'support',
    loadComponent: () =>
      import('./pages/support/support').then((c) => c.Support),
  },

  // Admin pages
  {
    path: 'admin/dashboard',
    loadComponent: () =>
      import('./pages/admin-dashboard/admin-dashboard').then((c) => c.AdminDashboard),
  },
  {
    path: 'admin/tickets',
    loadComponent: () =>
      import('./pages/admin-tickets/admin-tickets').then((c) => c.AdminTickets),
  },
  {
    path: 'admin/users',
    loadComponent: () =>
      import('./pages/admin-users/admin-users').then((c) => c.AdminUsers),
  },

  // Fallback
  { 
    path: '**', 
    loadComponent: () =>
      import('./pages/not-found/not-found').then((c) => c.NotFound),
  },
];
