import { Action, createReducer, on } from '@ngrx/store';
import { Course } from '@shared/models/course.model';
import * as CourseActions from './courses.actions';

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

  //All
  on(CourseActions.requestAllCourses, state => ({
    ...state,
    isAllCoursesLoading: true,
  })),
  on(CourseActions.requestAllCoursesSuccess, (state, { courses }) => ({
    ...state,
    allCourses: courses,
    isAllCoursesLoading: false,
  })),
  on(CourseActions.requestAllCoursesFail, (state, { error }) => ({
    ...state,
    isAllCoursesLoading: false,
    errorMessage: error,
  })),

  // single

  on(CourseActions.requestSingleCourse, state => ({
    ...state,
    isSingleCourseLoading: true,
  })),
  on(CourseActions.requestSingleCourseSuccess, (state, { course }) => ({
    ...state,
    course: course,
    isSingleCourseLoading: false,
  })),
  on(CourseActions.requestSingleCourseFail, (state, { error }) => ({
    ...state,
    isSingleCourseLoading: false,
    errorMessage: error,
  })),

  // filter

  on(CourseActions.requestFilteredCourses, state => ({
    ...state,
    isAllCoursesLoading: true,
    isSearchState: true,
  })),
  on(
    CourseActions.requestFilteredCoursesSuccess,
    (state, { filteredCourses }) => ({
      ...state,
      allCourses: filteredCourses,
      isAllCoursesLoading: false,
      isSearchState: false,
    })
  ),
  on(CourseActions.requestFilteredCoursesFail, (state, { error }) => ({
    ...state,
    isAllCoursesLoading: false,
    isSearchState: false,
    errorMessage: error,
  })),

  // create

  on(CourseActions.requestCreateCourse, state => ({
    ...state,
    isAllCoursesLoading: true,
  })),
  on(CourseActions.requestCreateCourseSuccess, (state, { course }) => ({
    ...state,
    course: course,
    isAllCoursesLoading: false,
  })),
  on(CourseActions.requestCreateCourseFail, (state, { error }) => ({
    ...state,
    isAllCoursesLoading: false,
    errorMessage: error,
  })),

  // edit

  on(CourseActions.requestEditCourse, state => ({
    ...state,
    isAllCoursesLoading: true,
  })),
  on(CourseActions.requestEditCourseSuccess, (state, { course }) => ({
    ...state,
    course: course,
    isAllCoursesLoading: false,
  })),
  on(CourseActions.requestEditCourseFail, (state, { error }) => ({
    ...state,
    isAllCoursesLoading: false,
    errorMessage: error,
  })),

  // delete

  on(CourseActions.requestDeleteCourse, state => ({
    ...state,
    isAllCoursesLoading: true,
  })),
  on(CourseActions.requestDeleteCourseSuccess, (state, { id }) => ({
    ...state,
    allCourses: state.allCourses.filter(courses => courses.id !== id),
    isAllCoursesLoading: false,
  })),
  on(CourseActions.requestDeleteCourseFail, (state, { error }) => ({
    ...state,
    isAllCoursesLoading: false,
    errorMessage: error,
  }))
); // Add your code here

export const reducer = (state: CoursesState, action: Action): CoursesState =>
  coursesReducer(state, action);
