import { Component } from '@angular/core';
import { ButtonText } from '@shared/components';
import { SessionStorageService } from '@app/auth/services/session-storage.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@app/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'courses-app';
  protected readonly ButtonText = ButtonText;

  constructor(
    private sessionStorage: SessionStorageService,
    private http: HttpClient,
    private authService: AuthService
  ) {}
}
