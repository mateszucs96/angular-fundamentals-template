import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedGuard implements CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // Add your code here
  canLoad() {
    return this.authService.isAuthorized$.pipe(
      tap(isAuth => {
        if (isAuth) {
          console.log(isAuth);
          return true;
        } else {
          console.log('f', isAuth);
          return this.router.navigate(['/login']);
        }
      })
    );
  }
}
