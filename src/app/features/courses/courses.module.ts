import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CoursesComponent } from '@features/courses/courses.component';
import { CourseInfoModule } from '@features/course-info/course-info.module';
import { CoursesListComponent } from '@features/courses/courses-list/courses-list.component';

@NgModule({
  declarations: [CoursesComponent, CoursesListComponent],
  imports: [CommonModule, SharedModule, CourseInfoModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
