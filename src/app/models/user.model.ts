export interface User {
  id: number;
  initials: string;
  name: string;
  email: string;
  role: 'User' | 'Admin' ;
  plan: 'Free' | 'Pro' ;
  status: 'Active' | 'Suspended';
  joined: string;
  searches: number;
}