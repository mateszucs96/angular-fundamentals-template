import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserRegistration } from '@shared/models/user.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { SessionStorageService } from '@app/auth/services/session-storage.service';
import { Router } from '@angular/router';

interface LoginResponse {
  result: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'http://localhost:4000/';
  private isAuthorized$$ = new BehaviorSubject(false);
  public isAuthorized$ = this.isAuthorized$$.asObservable();

  constructor(
    private sessionService: SessionStorageService,
    private http: HttpClient,
    private router: Router
  ) {
    const token = this.sessionService.getToken();

    this.isAuthorized$$.next(!!token);
  }

  login(user: User): Observable<void> {
    // Add your code here
    return this.http.post<LoginResponse>(`${this.API_URL}login`, user).pipe(
      map(response => {
        if (response.result) {
          this.sessionService.setToken(response.result);
        }
      })
    );
  }

  logout() {
    this.sessionService.deleteToken();
    this.isAuthorized$$.next(false);
    this.router.navigate(['/login']);
  }

  register(user: UserRegistration) {
    return this.http.post(`${this.API_URL}register`, user);
  }

  get isAuthorised() {
    return this.isAuthorized$$.getValue();
  }

  set isAuthorised(value: boolean) {
    this.isAuthorized$$.next(value);
  }

  getLoginUrl() {
    // Add your code here
  }
}
