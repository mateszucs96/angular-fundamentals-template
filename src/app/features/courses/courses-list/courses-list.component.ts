import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@shared/models/course.model';
import { IconNames } from '@shared/models/button.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input() courses!: Course[] | null;
  @Input() authorsNames!: string[];
  @Input() isEditable!: boolean;

  @Output() showCourse = new EventEmitter<Course>();
  @Output() editCourse = new EventEmitter<Course>();
  @Output() deleteCourse = new EventEmitter();

  protected readonly IconNames = IconNames;

  onShowCourse(course: Course) {
    this.showCourse.emit(course);
  }

  onEditCourse(course: Course) {
    this.editCourse.emit(course);
  }

  onDeleteCourse(course: Course) {
    this.deleteCourse.emit(course);
  }
}
