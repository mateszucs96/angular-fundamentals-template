import { NgModule } from '@angular/core';
import { CourseInfoComponent } from './course-info.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from '@app/auth/guards/authorized.guard';
import { CourseInfoRoutingModule } from '@features/course-info/course-info-routing.module';

@NgModule({
  declarations: [CourseInfoComponent],
  imports: [CourseInfoRoutingModule, SharedModule],
  exports: [CourseInfoComponent],
})
export class CourseInfoModule {}
