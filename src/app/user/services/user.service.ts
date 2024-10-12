import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '@shared/models/user.model';
import { Observable } from 'rxjs';
import { SessionStorageService } from '@app/auth/services/session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = 'http://localhost:4000/';

  constructor(private http: HttpClient) {}

  getUser(): Observable<{ result: User }> {
    return this.http.get<{ result: User }>(`${this.API_URL}users/me`);
  }
}
