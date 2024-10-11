import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from '@features/courses/courses.component';
import {
  CourseFormComponent,
  LoginFormComponent,
  RegistrationFormComponent,
} from '@shared/components';
import { CourseInfoComponent } from '@features/course-info/course-info.component';
import { NgModule } from '@angular/core';
import { NotAuthorizedGuard } from '@app/auth/guards/not-authorized.guard';
import { AuthorizedGuard } from '@app/auth/guards/authorized.guard';

export const routes: Routes = [
  { path: 'courses', component: CoursesComponent, canMatch: [AuthorizedGuard] },
  {
    path: 'login',
    component: LoginFormComponent,
    canActivate: [NotAuthorizedGuard],
  },
  {
    path: 'registration',
    component: RegistrationFormComponent,
    canActivate: [NotAuthorizedGuard],
  },
  {
    path: 'courses/add',
    component: CourseFormComponent,
    canMatch: [AuthorizedGuard],
  },
  {
    path: 'courses/:id',
    component: CourseInfoComponent,
    canMatch: [AuthorizedGuard],
  },
  {
    path: 'courses/edit:id',
    component: CourseFormComponent,
    canMatch: [AuthorizedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
