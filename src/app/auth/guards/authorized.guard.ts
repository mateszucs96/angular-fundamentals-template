import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@app/auth/services/auth.service';

type GuardResult = boolean | UrlTree;
type MaybeAsync<T> = T | Observable<T> | Promise<T>;

@Injectable({
  providedIn: 'root',
})
export class AuthorizedGuard implements CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // Add your code here
  canLoad(): MaybeAsync<GuardResult> {
    const isAuthorized = this.authService.isAuthorised;
    if (isAuthorized) {
      return true;
    } else {
      return this.router.createUrlTree(['login']);
    }
  }
}
