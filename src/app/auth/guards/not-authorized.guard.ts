import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class NotAuthorizedGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate() {
    const isAuthorized = this.authService.isAuthorised;
    if (!isAuthorized) {
      return true;
    } else {
      return this.router.createUrlTree(['/courses']);
    }
  }
}
