import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@features/courses/course';
import { mockedCoursesList } from '@shared/mocks/mocks';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input() courses: Course[] = mockedCoursesList;
  @Input() isEditable = true;

  @Output() showCourse = new EventEmitter<Course>();
  @Output() editCourse = new EventEmitter();
  @Output() deleteCourse = new EventEmitter();

  onShowCourse(course: Course) {
    this.showCourse.emit(course);
  }
}
