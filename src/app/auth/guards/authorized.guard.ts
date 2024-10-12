import { Injectable } from '@angular/core';
import { Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@app/auth/services/auth.service';

type GuardResult = boolean | UrlTree;
type MaybeAsync<T> = T | Observable<T> | Promise<T>;
interface CanMatch {
  canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult>;
}

@Injectable({
  providedIn: 'root',
})
export class AuthorizedGuard implements CanMatch {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  // Add your code here
  canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    const isAuthorized = this.authService.isAuthorised;
    console.log(isAuthorized)
    if (isAuthorized) {
      return true;
    } else {
      return this.router.createUrlTree(['login']);
    }
  }
}
