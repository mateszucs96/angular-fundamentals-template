import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '@shared/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

const loginRoutes: Routes = [
  {
    path: '',
    component: LoginFormComponent,
  },
];

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    RouterModule.forChild(loginRoutes),
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  exports: [LoginFormComponent, RouterModule],
})
export class LoginFormModule {}
