import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CourseInfoModule } from '@features/course-info/course-info.module';
import { CoursesComponent } from '@features/courses/courses.component';
import { CoursesListComponent } from '@features/courses/courses-list/courses-list.component';
import { AuthorsPipe } from '@shared/pipes/authors.pipe';
import { CourseFormModule } from '@shared/components/course-form/course-form.module';
import { CourseFormComponent } from '@shared/components';
import { RouterModule, Routes } from '@angular/router';
import { CourseInfoComponent } from '@features/course-info/course-info.component';
import { CoursesRoutingModule } from '@features/courses/courses-routing.module';

@NgModule({
  declarations: [],
  imports: [CoursesRoutingModule, CommonModule, SharedModule],
  exports: [RouterModule],
})
export class CoursesModule {}
