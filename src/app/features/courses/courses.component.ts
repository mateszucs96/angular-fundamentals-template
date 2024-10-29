import { Component, OnDestroy, OnInit } from '@angular/core';
import { Course } from '@shared/models/course.model';
import { CoursesStoreService } from '@app/services/courses-store.service';
import { UserStoreService } from '@app/user/services/user-store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonText } from '@shared/models/button.model';
import { Subject, takeUntil } from 'rxjs';
import { CoursesStateFacade } from '@app/store/courses/courses.facade';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject();
  courses$ = this.coursesFacade.allCourses$;
  selectedCourse$ = this.coursesFacade.course$;
  isAdmin!: boolean;

  protected readonly ButtonText = ButtonText;

  constructor(
    private coursesStoreService: CoursesStoreService,
    private userService: UserStoreService,
    private router: Router,
    private route: ActivatedRoute,
    private coursesFacade: CoursesStateFacade
  ) {}

  ngOnInit() {
    this.coursesFacade.getAllCourses();
    this.userService.getUser();
    this.coursesStoreService.getAllAuthors();

    this.userService.isAdmin$
      .pipe(takeUntil(this.destroy$))
      .subscribe(isAdmin => (this.isAdmin = isAdmin));
  }

  onShowCourse(course: Course) {
    this.userService.getUser();
    this.coursesFacade.getSingleCourse(course.id);
    this.router.navigate(['courses', course.id]);
  }

  onEditCourse(course: Course) {
    this.userService.getUser();

    this.router.navigate(['courses/edit', course.id]);
  }

  onDeleteCourse(course: Course) {
    this.userService.getUser();
    this.coursesFacade.deleteCourse(course.id);
  }

  onClickAddCourse() {
    this.userService.getUser();
    this.router.navigate(['courses/add']);
  }

  onSearch(searchInput: string): void {
    const trimmedSearchInput = searchInput.trim();
    if (!trimmedSearchInput) return;
    this.coursesFacade.getFilteredCourses(trimmedSearchInput);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
