import { Component, OnDestroy, OnInit } from '@angular/core';
import { Course } from '@shared/models/course.model';
import { CoursesStoreService } from '@app/services/courses-store.service';
import { UserStoreService } from '@app/user/services/user-store.service';
import { Router } from '@angular/router';
import { ButtonText } from '@shared/models/button.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject();
  courses!: Course[];
  selectedCourse!: Course | null;
  isAdmin!: boolean;

  protected readonly ButtonText = ButtonText;

  constructor(
    private coursesStoreService: CoursesStoreService,
    private userService: UserStoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.coursesStoreService.getAll();
    this.userService.getUser();
    this.coursesStoreService.getAllAuthors();
    this.coursesStoreService.courses$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.courses = data;
      });
    this.userService.isAdmin$
      .pipe(takeUntil(this.destroy$))
      .subscribe(isAdmin => (this.isAdmin = isAdmin));
  }

  onShowCourse(course: Course) {
    this.userService.getUser();
    this.selectedCourse = course;
    this.router.navigate(['courses', course.id]);
  }

  onEditCourse(course: Course) {
    this.userService.getUser();
    this.router.navigate(['courses/edit', course.id]);
  }

  onDeleteCourse(course: Course) {
    this.userService.getUser();
    this.coursesStoreService.deleteCourse(course.id);
  }

  onClickAddCourse() {
    this.userService.getUser();
    this.router.navigate(['courses/add']);
  }

  onSearch(searchInput: string): void {
    const trimmedSearchInput = searchInput.trim();
    if (!trimmedSearchInput) return;

    this.coursesStoreService.filterCourses(trimmedSearchInput);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
