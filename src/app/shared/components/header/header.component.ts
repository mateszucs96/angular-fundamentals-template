import { Component } from '@angular/core';
import { AuthService } from '@app/auth/services/auth.service';
import { UserStoreService } from '@app/user/services/user-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isAuthorized!: boolean;
  username!: string;
  constructor(
    private authService: AuthService,
    private userStoreService: UserStoreService
  ) {
    this.authService.isAuthorized$.subscribe(
      value => (this.isAuthorized = value)
    );
    this.userStoreService.name$.subscribe(value => {
      value ? (this.username = value) : (this.username = '');
    });
  }
}
