import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@shared/models/course.model';
import { IconNames } from '@shared/models/button.model';
import { CoursesStoreService } from '@app/services/courses-store.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input() courses!: Course[];
  @Input() authorsNames!: string[];
  @Input() isEditable = true;

  @Output() showCourse = new EventEmitter<Course>();
  @Output() editCourse = new EventEmitter();
  @Output() deleteCourse = new EventEmitter();

  protected readonly IconNames = IconNames;

  onEditCourse(course: Course) {
    this.editCourse.emit(course);
  }

  onShowCourse(course: Course) {
    this.showCourse.emit(course);
  }
}
