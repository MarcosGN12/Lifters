import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../../../../backend/src/resources/auth/auth.service';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const authToken = inject(AuthService).getAuthToken();

  const newReq = req.clone({
    headers: req.headers.set('X-Authentication-Token', `Bearer ${authToken}`),
  });

  return next(newReq);
}
