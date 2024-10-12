import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '@app/user/services/user.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '@shared/models/user.model';

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
    // Add your code here
    this.userService.getUser().subscribe(user => {
      this.name$$.next(user.result.name);
      this.isAdmin$$.next(user.result.role === 'admin');
    });
  }

  get isAdmin() {
    // Add your code here. Get isAdmin$$ value
    return this.isAdmin$$.getValue();
  }

  set isAdmin(value: boolean) {
    this.isAdmin$$.next(value);
  }
}
