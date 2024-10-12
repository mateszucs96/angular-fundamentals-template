import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '@shared/models/course.model';
import { ButtonText } from '@shared/components';
import { CoursesService } from '@app/services/courses.service';
import { Router } from '@angular/router';
import { CoursesStoreService } from '@app/services/courses-store.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() course!: Course;
  @Input() isEditable = true;
  protected readonly ButtonText = ButtonText;

  constructor(
    private coursesStoreService: CoursesStoreService,
    private router: Router
  ) {}

  clickOnShow(course: Course) {
    this.coursesStoreService.getCourse(course.id);
    this.router.navigate(['/courses/' + course.id]);
  }
}
