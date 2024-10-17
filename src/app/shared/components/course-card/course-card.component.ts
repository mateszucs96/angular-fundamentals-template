import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '@shared/models/course.model';
import { ButtonText } from '@shared/components';
import { CoursesStoreService } from '@app/services/courses-store.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() course!: Course;
  @Input() isEditable!: boolean;
  @Output() clickOnShow = new EventEmitter<Course>();
  public authors$ = this.coursesStoreService.authors$;
  protected readonly ButtonText = ButtonText;

  constructor(private coursesStoreService: CoursesStoreService) {}

  onShowCourse() {
    this.clickOnShow.emit(this.course);
  }
}
