import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '@shared/models/course.model';
import { ButtonText } from '@shared/components';
import { CoursesService } from '@app/services/courses.service';
import { Router } from '@angular/router';
import { CoursesStoreService } from '@app/services/courses-store.service';
import { UserStoreService } from '@app/user/services/user-store.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() course!: Course;
  @Input() isEditable = true;
  @Output() clickOnEdit = new EventEmitter<Course>();
  @Output() clickOnShow = new EventEmitter<Course>();
  protected readonly ButtonText = ButtonText;
  isAdmin!: boolean;

  onShowCourse() {
    this.clickOnShow.emit(this.course);
  }

  onEditCourse(course: Course) {
    this.clickOnEdit.emit(course);
  }
}
