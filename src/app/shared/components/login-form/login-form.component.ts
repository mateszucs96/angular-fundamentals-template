import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ButtonText, IconNames } from '@shared/models/button.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @ViewChild('loginForm') public loginForm!: NgForm;
  protected readonly ButtonText = ButtonText;
  protected readonly IconNames = IconNames;

  email = '';
  password = '';

  onSubmit(form: NgForm) {
    if (!form.valid) {
      form.control.markAllAsTouched();
    }
  }
}
