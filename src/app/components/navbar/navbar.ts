import { Component } from '@angular/core';
import { Logo } from '../../assets/logo/logo';
import { MagnifyingGlassIcon } from '../../assets/magnifying-glass-icon/magnifying-glass-icon';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'app-navbar',
  imports: [Logo, MagnifyingGlassIcon,ThemeToggle],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
toggleTheme() {
throw new Error('Method not implemented.');
}
}
