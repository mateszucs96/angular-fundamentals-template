import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { SessionStorageService } from '@app/auth/services/session-storage.service';
import { UserService } from '@app/user/services/user.service';
import { AuthService } from '@app/auth/services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private sessionService: SessionStorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const token = this.sessionService.getToken();

    const cloneRequest = request.clone({
      setHeaders: {
        Authorization: `${token}`,
      },
    });

    return next.handle(cloneRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 || error.status === 403) {
          this.authService.getIsAuthorized().subscribe(console.log);
          this.router.navigate(['/login']);
        }
        return throwError(error);
      })
    );
  }
}
