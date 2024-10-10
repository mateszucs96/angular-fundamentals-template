import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ButtonText, ButtonType, IconNames } from '@shared/models/button.model';
import { AuthService } from '@app/auth/services/auth.service';
import { SessionStorageService } from '@app/auth/services/session-storage.service';

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
    private sessionService: SessionStorageService,
    private authService: AuthService
  ) {
    console.log(this.authService.isAuthorised);
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      form.control.markAllAsTouched();
    }
    this.authService.login(form.value).subscribe();
    this.authService.isAuthorised = true;
    console.log(this.authService.isAuthorised);
  }
}
