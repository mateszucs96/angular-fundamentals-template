import { Component, Input } from '@angular/core';
import { Course } from '@features/courses/course.model';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss'],
})
export class CourseInfoComponent {
  @Input() course!: Course;
  // Use the names for the input `course`.
}
