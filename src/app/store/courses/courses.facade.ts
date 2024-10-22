import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CoursesState } from '@app/store/courses/courses.reducer';
import * as CoursesActions from '@app/store/courses/courses.actions';
import {
  getAllCourses,
  getCourse,
  getErrorMessage,
  isAllCoursesLoadingSelector,
  isSearchingStateSelector,
  isSingleCourseLoadingSelector,
} from '@app/store/courses/courses.selectors';
import { Course } from '@shared/models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesStateFacade {
  public isAllCourseLoading$ = this.store.pipe(
    select(isAllCoursesLoadingSelector)
  );
  public isSingleCourseLoading$ = this.store.pipe(
    select(isSingleCourseLoadingSelector)
  );
  public isSearchingState$ = this.store.pipe(select(isSearchingStateSelector));
  public allCourses$ = this.store.pipe(select(getAllCourses));
  public course$ = this.store.pipe(select(getCourse));
  public errorMessage$ = this.store.pipe(select(getErrorMessage));

  constructor(private store: Store<CoursesState>) {}

  getAllCourses() {
    this.store.dispatch(CoursesActions.requestAllCourses());
  }

  getSingleCourse(id: string) {
    this.store.dispatch(CoursesActions.requestSingleCourse({ id: id }));
  }

  getFilteredCourses(searchQuery: string) {
    this.store.dispatch(
      CoursesActions.requestFilteredCourses({ title: searchQuery })
    );
  }

  editCourse(id: string, course: Course) {
    this.store.dispatch(
      CoursesActions.requestEditCourse({ id: id, course: course })
    );
  }

  createCourse(course: Course) {
    this.store.dispatch(CoursesActions.requestCreateCourse({ course: course }));
  }

  deleteCourse(id: string) {
    this.store.dispatch(CoursesActions.requestDeleteCourse({ id: id }));
  }
}
