import { Component, Input, OnInit } from '@angular/core';
import { Course } from '@shared/models/course.model';
import { ButtonText } from '@shared/components';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesStoreService } from '@app/services/courses-store.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss'],
})
export class CourseInfoComponent implements OnInit {
  @Input() course!: Course | null;
  protected readonly ButtonText = ButtonText;

  constructor(
    private route: ActivatedRoute,
    private routes: Router,
    private coursesStoreService: CoursesStoreService
  ) {}

  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (!courseId) return;
    this.coursesStoreService.getCourse(courseId);
    this.coursesStoreService.selectedCourse$.subscribe(
      data => (this.course = data)
    );
  }

  onClickBack() {
    this.routes.navigate(['../'], { relativeTo: this.route.parent });
  }
}
