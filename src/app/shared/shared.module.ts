import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './components/modal/modal.component';
import {
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  CourseCardComponent,
  LoginFormComponent,
  RegistrationFormComponent,
  CourseFormComponent,
} from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DurationPipe } from './pipes/duration.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { EmailValidatorDirective } from '@shared/directives/email.directive';
import { TogglePasswordDirective } from './directives/toggle-password.directive';
import { RouterLink } from '@angular/router';

const components = [
  HeaderComponent,
  ButtonComponent,
  SearchComponent,
  ModalComponent,
  CourseCardComponent,
  DurationPipe,
  CustomDatePipe,
  EmailValidatorDirective,
  TogglePasswordDirective,
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  exports: [components],
})
export class SharedModule {}
