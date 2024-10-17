import { Component, OnInit } from '@angular/core';
import { ButtonText } from '@shared/components';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';
import { UserStoreService } from '@app/user/services/user-store.service';
import { CoursesStoreService } from '@app/services/courses-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'courses-app';
  protected readonly ButtonText = ButtonText;
  isAuthorized!: boolean;

  constructor(
    private userStoreService: UserStoreService,
    private authService: AuthService,
    private coursesStoreService: CoursesStoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.isAuthorized$.subscribe(value => {
      this.isAuthorized = value;
      this.coursesStoreService.getAll();
    });
    if (!this.isAuthorized) {
      this.userStoreService.getUser();
      this.router.navigate(['/login']);
    } else {
      this.userStoreService.getUser();
      this.router.navigate(['courses']);
    }
  }

  onLogout() {
    this.authService.logout();
  }
}
