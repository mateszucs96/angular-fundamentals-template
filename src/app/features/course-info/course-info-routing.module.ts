import { RouterModule, Routes } from '@angular/router';
import { CourseInfoComponent } from '@features/course-info/course-info.component';
import { AuthorizedGuard } from '@app/auth/guards/authorized.guard';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: CourseInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseInfoRoutingModule {}
