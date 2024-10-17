import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { RegistrationFormComponent } from '@shared/components';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormRoutingModule } from '@shared/components/registration-form/registration-form-routing.module';

@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [
    RegistrationFormRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  exports: [RegistrationFormComponent],
})
export class RegistrationFormModule {}
