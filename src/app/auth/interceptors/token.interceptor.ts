import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { error } from '@angular/compiler-cli/src/transformers/util';
import { AuthService } from '@app/auth/services/auth.service';
import { SessionStorageService } from '@app/auth/services/session-storage.service';

@Injectable()
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private sessionService: SessionStorageService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const token = this.sessionService.getToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request).pipe(
      // Handle errors globally
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // If a 401 response is returned, log out the user and redirect to the login page
          // this.sessionService.logout();
          this.router.navigate(['/login']);
          console.log('user not authenticated');
        }
        return throwError(error); // Forward the error to the caller
      })
    );
  }
}
