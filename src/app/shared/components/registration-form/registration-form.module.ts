import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { RegistrationFormComponent } from '@shared/components';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const RegistrationRoute: Routes = [
  {
    path: '',
    component: RegistrationFormComponent,
  },
];

@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [
    RouterModule.forChild(RegistrationRoute),
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  exports: [RegistrationFormComponent, RouterModule],
})
export class RegistrationFormModule {}
