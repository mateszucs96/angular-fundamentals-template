import { Component, Input, OnInit } from '@angular/core';
import { Course } from '@shared/models/course.model';
import { ButtonText } from '@shared/components';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesStoreService } from '@app/services/courses-store.service';
import { UserService } from '@app/user/services/user.service';
import { CoursesStateFacade } from '@app/store/courses/courses.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss'],
})
export class CourseInfoComponent implements OnInit {
  @Input() course!: Course | null;
  protected readonly ButtonText = ButtonText;
  public authors$ = this.coursesStoreService.authors$;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private coursesFacade: CoursesStateFacade,
    private coursesStoreService: CoursesStoreService
  ) {}

  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (!courseId) return;
    // this.coursesFacade.course$.subscribe(value => (this.course = value));
    console.log(this.course);
    // this.coursesStoreService.getCourse(courseId);
    // this.coursesStoreService.selectedCourse$.subscribe(
    //   data => (this.course = data)
    // );
  }

  onClickBack() {
    this.router.navigate([''], { relativeTo: this.route.parent });
  }
}
