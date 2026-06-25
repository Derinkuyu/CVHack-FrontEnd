import { Component } from '@angular/core';
import { AuthCard } from '../../components/auth-card/auth-card';
import { RegisterPayload } from '../../models/auth.model';
import { Router } from '@angular/router';
import { RegisterForm } from '../../components/register-form/register-form';

@Component({
  selector: 'app-register',
  imports: [AuthCard, RegisterForm],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  constructor(private router: Router) {}

  onRegisterSubmitted(data: RegisterPayload) {
    console.log('Register payload:', data);
    this.router.navigate(['/jobs']);
  }
}
