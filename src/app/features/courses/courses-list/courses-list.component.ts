import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@shared/models/course.model';
import { IconNames } from '@shared/models/button.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input() courses!: { course: Course; authorsNames: string[] }[];
  @Input() authorsNames!: string[];
  @Input() isEditable = true;

  @Output() showCourse = new EventEmitter<Course>();
  @Output() editCourse = new EventEmitter();
  @Output() deleteCourse = new EventEmitter();

  onShowCourse(course: Course) {
    this.showCourse.emit(course);
  }

  protected readonly IconNames = IconNames;
}
