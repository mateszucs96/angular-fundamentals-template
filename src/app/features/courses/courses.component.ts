import { Component } from '@angular/core';
import { mockedCoursesList } from '@shared/mocks/mocks';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  constructor() {}

  protected readonly mockedCoursesList = mockedCoursesList;
}
