import { NgModule } from '@angular/core';
import { CoursesComponent } from '@features/courses/courses.component';
import { CoursesListComponent } from '@features/courses/courses-list/courses-list.component';
import { CourseFormComponent } from '@shared/components';
import { RouterModule, Routes } from '@angular/router';
import { CourseInfoComponent } from '@features/course-info/course-info.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'add', component: CourseFormComponent },
  { path: ':id', component: CourseInfoComponent },
  { path: 'edit/:id', component: CourseFormComponent },
];

@NgModule({
  declarations: [CoursesComponent, CoursesListComponent, CourseInfoComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
