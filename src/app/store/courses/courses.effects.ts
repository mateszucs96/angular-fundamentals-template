import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CoursesService } from '@app/services/courses.service';
import { catchError, exhaustMap, map, Observable, of } from 'rxjs';
import { CoursesConstants } from '@app/store/courses/courses.constants';
import * as CoursesActions from '@app/store/courses/courses.actions';
import { Action, ActionCreator } from '@ngrx/store';
import { Course } from '@shared/models/course.model';
import { Router } from '@angular/router';

@Injectable()
export class CoursesEffects {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private router: Router
  ) {}

  private handleApiRequest<
    A extends Action,
    R,
    Success extends Action,
    Fail extends Action,
  >(
    actionType: ActionCreator<string, (props: A) => A>,
    serviceCall: (action: A) => Observable<R>,
    successAction: (response: R) => Success,
    failAction: (error: any) => Fail
  ) {
    return createEffect(() =>
      this.actions$.pipe(
        ofType(actionType),
        exhaustMap((action: A) =>
          serviceCall(action).pipe(
            map((res: R) => successAction(res) as Action),
            catchError(error => of(failAction({ error })))
          )
        )
      )
    );
  }

  getAll$ = this.handleApiRequest(
    CoursesActions.requestAllCourses,
    () => this.coursesService.getAll(),
    res => CoursesActions.requestAllCoursesSuccess({ courses: res.result }),
    CoursesActions.requestAllCoursesFail
  );

  filteredCourses$ = this.handleApiRequest(
    CoursesActions.requestFilteredCourses,
    (action: { title: string }) =>
      this.coursesService.filterCourses(action.title),
    res =>
      CoursesActions.requestFilteredCoursesSuccess({
        courses: res.result,
      }),
    CoursesActions.requestFilteredCoursesFail
  );

  getSpecificCourse$ = this.handleApiRequest(
    CoursesActions.requestSingleCourse,
    (action: { id: string }) => this.coursesService.getCourse(action.id),
    res => CoursesActions.requestSingleCourseSuccess({ course: res.result }),
    CoursesActions.requestSingleCourseFail
  );

  deleteCourse$ = this.handleApiRequest(
    CoursesActions.requestDeleteCourse,
    (action: { id: string }) => this.coursesService.deleteCourse(action.id),
    () => CoursesActions.requestAllCourses(),
    CoursesActions.requestDeleteCourseFail
  );

  editCourse$ = this.handleApiRequest(
    CoursesActions.requestEditCourse,
    (action: { id: string; course: Course }) => {
      return this.coursesService.editCourse(action.id, action.course);
    },
    res => CoursesActions.requestEditCourseSuccess({ course: res.result }),
    CoursesActions.requestEditCourseFail
  );

  createCourse$ = this.handleApiRequest(
    CoursesActions.requestCreateCourse,
    (action: { course: Course }) =>
      this.coursesService.createCourse(action.course),
    res => CoursesActions.requestCreateCourseSuccess({ course: res.result }),
    CoursesActions.requestCreateCourseFail
  );

  redirectToTheCoursesPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          CoursesActions.requestCreateCourseSuccess,
          CoursesActions.requestEditCourseSuccess,
          CoursesActions.requestSingleCourseFail
        ),
        exhaustMap(() => this.router.navigate(['/courses']))
      ),
    { dispatch: false }
  );
}
