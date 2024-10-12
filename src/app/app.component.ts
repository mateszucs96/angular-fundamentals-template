import { Component } from '@angular/core';
import { ButtonText } from '@shared/components';
import { SessionStorageService } from '@app/auth/services/session-storage.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@app/auth/services/auth.service';
import { UserStoreService } from '@app/user/services/user-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'courses-app';
  protected readonly ButtonText = ButtonText;
  isAuthorized!: boolean;

  constructor(
    private userStoreService: UserStoreService,
    private authService: AuthService
  ) {
    this.userStoreService.getUser();
    this.authService.isAuthorized$.subscribe(
      value => (this.isAuthorized = value)
    );
  }

  onLogout() {
    this.authService.logout();
  }
}
