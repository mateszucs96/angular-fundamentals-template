import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  coursesFeatureKey,
  CoursesState,
} from '@app/store/courses/courses.reducer';

export const selectCourseState =
  createFeatureSelector<CoursesState>(coursesFeatureKey);

export const isAllCoursesLoadingSelector = createSelector(
  selectCourseState,
  state => state.isAllCoursesLoading
);
export const isSearchingStateSelector = createSelector(
  selectCourseState,
  state => state.isSearchState
);
export const isSingleCourseLoadingSelector = createSelector(
  selectCourseState,
  state => state.isSingleCourseLoading
);
export const getAllCourses = createSelector(
  selectCourseState,
  state => state.allCourses
);
export const getCourse = createSelector(
  selectCourseState,
  state => state.course
);
export const getErrorMessage = createSelector(
  selectCourseState,
  state => state.errorMessage
);
