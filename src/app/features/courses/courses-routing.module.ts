import { NgModule } from '@angular/core';
import { CoursesComponent } from '@features/courses/courses.component';
import { CoursesListComponent } from '@features/courses/courses-list/courses-list.component';
import { CourseFormComponent } from '@shared/components';
import { RouterModule, Routes } from '@angular/router';
import { CourseInfoComponent } from '@features/course-info/course-info.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CourseInfoModule } from '@features/course-info/course-info.module';

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

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { CoursesComponent } from './courses.component';
// import { AuthorizedGuard } from '@app/auth/guards/authorized.guard';
// import { AdminGuard } from '@app/user/guards/admin.guard';
//
// const coursesRoutes: Routes = [
//   {
//     path: '/',
//     component: CoursesComponent,
//     pathMatch: 'full',
//   },
//   {
//     path: 'add',
//     loadChildren: () =>
//       import('../../shared/components/course-form/course-form.module').then(
//         m => m.CourseFormModule
//       ),
//     canActivate: [AdminGuard],
//   },
//   {
//     path: 'edit/:id',
//     loadChildren: () =>
//       import('../../shared/components/course-form/course-form.module').then(
//         m => m.CourseFormModule
//       ),
//     canActivate: [AdminGuard],
//   },
//   {
//     path: ':id',
//     loadChildren: () =>
//       import('../course-info/course-info.module').then(m => m.CourseInfoModule),
//   },
// ];
//
// @NgModule({
//   imports: [RouterModule.forChild(coursesRoutes)],
//   exports: [RouterModule],
// })
// export class CoursesRoutingModule {}
