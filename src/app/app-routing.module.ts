import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from '@features/courses/courses.component';
import { NgModule } from '@angular/core';
import { NotAuthorizedGuard } from '@app/auth/guards/not-authorized.guard';
import { AuthorizedGuard } from '@app/auth/guards/authorized.guard';
import { AdminGuard } from '@app/user/guards/admin.guard';

export const routes: Routes = [
  {
    path: 'courses',
    loadChildren: () =>
      import('./features/courses/courses.module').then(m => m.CoursesModule),
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
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '/courses' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
