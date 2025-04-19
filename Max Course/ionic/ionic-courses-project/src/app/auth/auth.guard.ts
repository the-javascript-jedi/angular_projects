import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

export const authGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.userIsAuthentcated
    ? true
    : router.createUrlTree(['/auth']);
};
