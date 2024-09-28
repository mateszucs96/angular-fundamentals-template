import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() courseSelected = new EventEmitter<any>();

  onShowCourse(course: any) {
    this.courseSelected.emit(course);
    console.log('Course shown:', course);
    // You can also delegate it further up to the grandparent if needed
  }
}
