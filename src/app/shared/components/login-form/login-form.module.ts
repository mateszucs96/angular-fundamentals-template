import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '@shared/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { LoginFormRoutingModule } from '@shared/components/login-form/login-form-routing.module';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    LoginFormRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  exports: [LoginFormComponent],
})
export class LoginFormModule {}
