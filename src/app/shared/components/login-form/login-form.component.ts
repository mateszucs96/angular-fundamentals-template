import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ButtonText } from '@shared/models/button.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @ViewChild('loginForm') public loginForm!: NgForm;

  email = '';
  password = '';

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  protected readonly ButtonText = ButtonText;
}
