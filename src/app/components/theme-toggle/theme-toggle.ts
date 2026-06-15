import { Component } from '@angular/core';
import { MoonIcon } from '../../assets/moon-icon/moon-icon';
import { SunIcon } from '../../assets/sun-icon/sun-icon';

@Component({
  selector: 'app-theme-toggle',
  imports: [MoonIcon, SunIcon],
  templateUrl: './theme-toggle.html',
  styleUrls: ['./theme-toggle.css'],
})
export class ThemeToggle {
  isDark = false;

  toggleTheme() {
    this.isDark = !this.isDark;
    document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : '');
  }
}
