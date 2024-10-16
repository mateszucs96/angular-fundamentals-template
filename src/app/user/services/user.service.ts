import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@shared/models/user.model';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../../environments/environment.development';
import { ApiEndpoint } from '@shared/models/urlPath.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = 'http://localhost:4000/';

  constructor(private http: HttpClient) {}

  getUser(): Observable<{ result: User }> {
    return this.http.get<{ result: User }>(
      `${BASE_URL}${ApiEndpoint.USERS}/me`
    );
  }
}
