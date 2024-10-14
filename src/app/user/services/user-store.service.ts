import { Injectable } from '@angular/core';
import { UserService } from '@app/user/services/user.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  private name$$ = new BehaviorSubject<string | null>(null);
  private isAdmin$$ = new BehaviorSubject<boolean>(false);

  public name$ = this.name$$.asObservable();
  public isAdmin$ = this.isAdmin$$.asObservable();

  constructor(private userService: UserService) {}

  getUser() {
    this.userService.getUser().subscribe(user => {
      this.name$$.next(user.result.name);
      this.isAdmin$$.next(user.result.role === 'admin');
    });
  }

  get isAdmin() {
    return this.isAdmin$$.getValue();
  }

  set isAdmin(value: boolean) {
    this.isAdmin$$.next(value);
  }
}
