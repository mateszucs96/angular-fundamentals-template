import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserRegistration } from '@shared/models/user.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { SessionStorageService } from '@app/auth/services/session-storage.service';
import { Router } from '@angular/router';
import { ApiEndpoint } from '@shared/models/urlPath.model';
import { environment } from '../../../environments/environment';

interface LoginResponse {
  result: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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
    return this.http
      .post<LoginResponse>(`${environment.BASE_URL}${ApiEndpoint.LOGIN}`, user)
      .pipe(
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
    this.router.navigate([`/${ApiEndpoint.LOGIN}`]);
  }

  register(user: UserRegistration) {
    return this.http.post(
      `${environment.BASE_URL}${ApiEndpoint.REGISTER}`,
      user
    );
  }

  get isAuthorised() {
    const token = this.sessionService.getToken();
    const isAuthorised = !!token;
    if (this.isAuthorized$$.value !== isAuthorised) {
      this.isAuthorized$$.next(isAuthorised);
    }
    return isAuthorised;
  }

  set isAuthorised(value: boolean) {
    this.isAuthorized$$.next(value);
  }

  getIsAuthorized() {
    return this.isAuthorized$;
  }

  getLoginUrl() {
    // Add your code here
  }
}
