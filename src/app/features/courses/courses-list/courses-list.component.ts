import { Component, Input } from '@angular/core';
import { Course } from '@features/courses/course.model';
import { mockedCoursesList } from '@shared/mocks/mocks';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input() courses: Course[] = mockedCoursesList;
  @Input() isEditable = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
    console.log(this.courses);
  }
}
