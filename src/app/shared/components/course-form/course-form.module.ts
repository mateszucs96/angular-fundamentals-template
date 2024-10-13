import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CourseFormComponent } from '@shared/components';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const courseFormRoute: Routes = [
  {
    path: '',
    component: CourseFormComponent,
  },
];

@NgModule({
  declarations: [CourseFormComponent],
  imports: [
    RouterModule.forChild(courseFormRoute),
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  exports: [CourseFormComponent, RouterModule],
})
export class CourseFormModule {}
