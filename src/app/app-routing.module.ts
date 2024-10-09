import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from '@features/courses/courses.component';
import {
  CourseFormComponent,
  LoginFormComponent,
  RegistrationFormComponent,
} from '@shared/components';
import { CourseInfoComponent } from '@features/course-info/course-info.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'courses/add', component: CourseFormComponent },
  { path: 'courses/:id', component: CourseInfoComponent },
  { path: 'courses/edit:id', component: CourseFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
