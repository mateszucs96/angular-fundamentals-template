import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CourseFormComponent } from '@shared/components';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseFormRoutingModule } from '@shared/components/course-form/course-form-routing.module';

@NgModule({
  declarations: [CourseFormComponent],
  imports: [
    CourseFormRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  exports: [CourseFormComponent],
})
export class CourseFormModule {}
