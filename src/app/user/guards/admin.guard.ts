import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserStoreService } from '@app/user/services/user-store.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private userStoreService: UserStoreService,
    private router: Router
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let isAdmin = false;
    this.userStoreService.isAdmin$.subscribe(isAdminStatus => {
      isAdmin = isAdminStatus;
    });

    if (isAdmin) {
      return true;
    } else {
      return this.router.createUrlTree(['/courses']);
    }
    // return this.userStorageService.isAdmin$.pipe(
    //   map(isAdmin => {
    //     console.log(isAdmin)
    //     if (isAdmin) {
    //       return true;
    //     } else {
    //       return this.router.createUrlTree(['/courses']);
    //     }
    //   })
    // );
  }
}
