import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from '@features/courses/courses.component';
import { NgModule } from '@angular/core';
import { NotAuthorizedGuard } from '@app/auth/guards/not-authorized.guard';
import { AuthorizedGuard } from '@app/auth/guards/authorized.guard';
import { AdminGuard } from '@app/user/guards/admin.guard';

export const routes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    canMatch: [AuthorizedGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./shared/components/login-form/login-form.module').then(
        m => m.LoginFormModule
      ),
    canActivate: [NotAuthorizedGuard],
  },
  {
    path: 'registration',
    loadChildren: () =>
      import(
        './shared/components/registration-form/registration-form.module'
      ).then(m => m.RegistrationFormModule),
    canActivate: [NotAuthorizedGuard],
  },
  {
    path: 'courses/add',
    loadChildren: () =>
      import('./shared/components/course-form/course-form.module').then(
        m => m.CourseFormModule
      ),
    canActivate: [AdminGuard],
  },
  {
    path: 'courses/:id',
    loadChildren: () =>
      import('./features/course-info/course-info.module').then(
        m => m.CourseInfoModule
      ),
    canMatch: [AuthorizedGuard],
  },
  {
    path: 'courses/edit:id',
    loadChildren: () =>
      import('./shared/components/course-form/course-form.module').then(
        m => m.CourseFormModule
      ),
    canMatch: [AuthorizedGuard],
    canActivate: [AdminGuard],
  },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
