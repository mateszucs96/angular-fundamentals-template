import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '@shared/models/course.model';
import { ButtonText } from '@shared/components';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() course!: Course;
  @Input() isEditable = true;
  @Input() authorsNames: string[] = [];
  @Output() showCourse = new EventEmitter<Course>();

  clickOnShow(course: Course) {
    this.showCourse.emit(course);
  }

  protected readonly ButtonText = ButtonText;
}
