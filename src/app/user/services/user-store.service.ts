import { Injectable } from '@angular/core';
import { UserService } from '@app/user/services/user.service';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '@shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  private user$$ = new BehaviorSubject<User | null>(null);
  public user$ = this.user$$.asObservable();

  public isAdmin$ = this.user$.pipe(
    map(user => (user ? user.role === 'admin' : false))
  );

  public name$ = this.user$.pipe(map(user => (user ? user.name : null)));

  constructor(private userService: UserService) {}

  getUser() {
    this.userService.getUser().subscribe(user => {
      this.user$$.next(user.result);
    });
  }

  get isAdmin() {
    return this.user$$.getValue()?.role === 'admin';
  }

  get name() {
    return this.user$$.getValue()?.name;
  }

  // set isAdmin(value: boolean) {
  //   this.user$$.next(value);
  // }
}
