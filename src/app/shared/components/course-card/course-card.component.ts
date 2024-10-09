import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '@shared/models/course.model';
import { ButtonText } from '@shared/components';
import { CoursesService } from '@app/services/courses.service';
import { Router } from '@angular/router';

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
  protected readonly ButtonText = ButtonText;

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) {}

  clickOnShow(course: Course) {
    this.coursesService.selectedCourse.emit(course);
    this.router.navigate(['/courses/' + course.id]);
  }
}
