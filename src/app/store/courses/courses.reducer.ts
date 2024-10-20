import { Action, createReducer, on } from '@ngrx/store';
import { Course } from '@shared/models/course.model';
import * as CourseActions from './courses.actions';
import { requestAllCourses } from '@app/store/courses/courses.actions';

// Add your code here

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CoursesState {
  allCourses: Course[];
  course: Course | null;
  isAllCoursesLoading: boolean;
  isSingleCourseLoading: boolean;
  isSearchState: boolean;
  errorMessage: string | null;
}

export const initialState: CoursesState = {
  allCourses: [],
  course: null,
  isAllCoursesLoading: false,
  isSingleCourseLoading: false,
  isSearchState: false,
  errorMessage: null,
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const coursesReducer = createReducer(
  initialState,
  on(CourseActions.requestAllCourses, state => ({
    ...state,
    isAllCoursesLoading: true,
  }))
); // Add your code here

export const reducer = (state: CoursesState, action: Action): CoursesState =>
  coursesReducer(state, action);
