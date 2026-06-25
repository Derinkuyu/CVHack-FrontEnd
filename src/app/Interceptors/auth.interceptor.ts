import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  // No token (e.g. the login/register calls themselves) → send request unchanged
  if (!token) {
    return next(req);
  }

  // Clone the request and add the Authorization header
  const authReq = req.clone({
    setHeaders: { Authorization: `Bearer ${token}` },
  });

  return next(authReq);
};