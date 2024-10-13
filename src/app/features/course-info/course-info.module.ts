import { NgModule } from '@angular/core';
import { CourseInfoComponent } from './course-info.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const courseInfoRoute: Routes = [{ path: '', component: CourseInfoComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(courseInfoRoute)],
  providers: [],
  exports: [RouterModule],
})
export class CourseInfoModule {}
