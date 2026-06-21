import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MailIcon } from "../../assets/mail-icon/mail-icon";
import { LockIcon } from "../../assets/lock-icon/lock-icon";
import { EyeIcon } from "../../assets/eye-icon/eye-icon";

@Component({
  selector: 'app-login-form',
  imports: [FormsModule, RouterLink, MailIcon, LockIcon, EyeIcon],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  email = '';
  password = '';
  showPassword = false;

  constructor(private router: Router) { }


  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    console.log('Login attempt:', this.email, this.password);
    this.router.navigate(['/jobs']);
  }
}
