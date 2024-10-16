import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { UserStoreService } from '@app/user/services/user-store.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private userStoreService: UserStoreService,
    private router: Router
  ) {}

  canActivate() {
    // if (this.userStoreService.isAdmin) {
    //   return true;
    // } else {
    return this.router.createUrlTree(['/courses']);
    // }
  }
}
