import { Component, inject } from '@angular/core';
import { Logo } from '../../assets/logo/logo';
import { MagnifyingGlassIcon } from '../../assets/magnifying-glass-icon/magnifying-glass-icon';
import { ThemeToggle } from '../theme-toggle/theme-toggle';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  imports: [Logo, MagnifyingGlassIcon, ThemeToggle, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private authService = inject(AuthService);
  private router = inject(Router);

  isAdmin = this.authService.hasRole('Admin');

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  toggleTheme() {
    throw new Error('Method not implemented.');
  }
}
