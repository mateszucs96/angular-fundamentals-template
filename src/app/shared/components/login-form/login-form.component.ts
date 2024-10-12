import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ButtonText, ButtonType, IconNames } from '@shared/models/button.model';
import { AuthService } from '@app/auth/services/auth.service';
import { SessionStorageService } from '@app/auth/services/session-storage.service';
import { UserStoreService } from '@app/user/services/user-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @ViewChild('loginForm') public loginForm!: NgForm;
  protected readonly ButtonText = ButtonText;
  protected readonly IconNames = IconNames;
  protected readonly ButtonType = ButtonType;
  email = '';
  password = '';

  constructor(
    private userStoreService: UserStoreService,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      form.control.markAllAsTouched();
      return;
    }
    this.authService.login(form.value).subscribe(() => {
      this.authService.isAuthorised = true;
      this.router.navigate(['/courses']);
    });
  }
}
