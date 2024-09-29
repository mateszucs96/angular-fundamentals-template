import { Component } from '@angular/core';
import { mockedCoursesList } from '@shared/mocks/mocks';
import { Course } from '@features/courses/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  protected readonly mockedCoursesList = mockedCoursesList;

  selectedCourse!: Course;

  onCourseSelected(course: Course) {
    this.selectedCourse = course;
  }
}
