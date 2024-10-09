import { Component, Input, OnInit } from '@angular/core';
import { Course } from '@shared/models/course.model';
import { ButtonText } from '@shared/components';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesService } from '@app/services/courses.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss'],
})
export class CourseInfoComponent implements OnInit {
  @Input() course!: Course;
  protected readonly ButtonText = ButtonText;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (!courseId) return;
    this.course = this.coursesService.getCourse(courseId);
  }
}
