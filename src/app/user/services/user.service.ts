import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@shared/models/user.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { ApiEndpoint } from '@shared/models/urlPath.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<{ result: User }> {
    return this.http.get<{ result: User }>(
      `${environment.BASE_URL}${ApiEndpoint.USERS}/me`
    );
  }
}
