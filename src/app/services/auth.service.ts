import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiResult, AuthResult, LoginPayload } from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  login(payload: LoginPayload): Observable<ApiResult<AuthResult>> {
    return this.http
      .post<ApiResult<AuthResult>>(`${this.apiUrl}/auth/login`, payload)
      .pipe(
        tap((res) => {
          if (res.isSuccess && res.data) {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('email', res.data.email);
            localStorage.setItem('roles', JSON.stringify(res.data.roles));
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('roles');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}