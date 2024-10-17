import { NgModule } from '@angular/core';
import { CourseInfoComponent } from './course-info.component';
import { SharedModule } from '@app/shared/shared.module';
import { CourseInfoRoutingModule } from '@features/course-info/course-info-routing.module';
import { AsyncPipe } from '@angular/common';

@NgModule({
  declarations: [CourseInfoComponent],
  imports: [CourseInfoRoutingModule, SharedModule, AsyncPipe],
  exports: [CourseInfoComponent],
})
export class CourseInfoModule {}
