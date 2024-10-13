import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CourseFormModule } from '@shared/components/course-form/course-form.module';
import { RouterModule } from '@angular/router';
import { CoursesRoutingModule } from '@features/courses/courses-routing.module';

@NgModule({
  declarations: [],
  imports: [CoursesRoutingModule, CommonModule, SharedModule],
  exports: [RouterModule],
})
export class CoursesModule {}
