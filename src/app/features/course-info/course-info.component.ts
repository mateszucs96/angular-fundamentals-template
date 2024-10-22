import { Component, Input, OnInit } from '@angular/core';
import { Course } from '@shared/models/course.model';
import { ButtonText } from '@shared/components';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesStoreService } from '@app/services/courses-store.service';
import { CoursesStateFacade } from '@app/store/courses/courses.facade';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss'],
})
export class CourseInfoComponent implements OnInit {
  @Input() course!: Course | null;
  public authors$ = this.coursesStoreService.authors$;
  protected readonly ButtonText = ButtonText;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesFacade: CoursesStateFacade,
    private coursesStoreService: CoursesStoreService
  ) {}

  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (!courseId) return;
    this.coursesFacade.course$.subscribe(value => (this.course = value));
  }

  onClickBack() {
    this.router.navigate([''], { relativeTo: this.route.parent });
  }
}
