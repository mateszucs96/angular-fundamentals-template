import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ButtonText, ButtonType, IconNames } from '@shared/models/button.model';
import { AuthService } from '@app/auth/services/auth.service';
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
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      form.control.markAllAsTouched();
      return;
    }
    this.authService.login(form.value).subscribe({
      next: () => {
        this.authService.isAuthorised = true;
        this.router.navigate(['/coursesss']);
      },
      // eslint-disable-next-line no-console
      error: err => console.error(err),
    });
  }
}
