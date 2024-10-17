import { Course } from '@shared/models/course.model';
import { Author } from '@shared/models/author.model';
import { User } from '@shared/models/user.model';

export interface AllCourseResponse {
  successful: boolean;
  result: Course[];
}

export interface CourseResponse {
  successful: boolean;
  result: Course;
}

export interface CreateCourseResponse {
  successful: boolean;
  result: Course;
}

export interface EditCourseResponse {
  successful: boolean;
  result: Course;
}

export interface FilterCourseResponse {
  successful: boolean;
  result: Course[];
}

export interface AllAuthorsResponse {
  successful: boolean;
  result: Author[];
}

export interface AuthorResponse {
  successful: boolean;
  result: Author;
}

export interface CreateAuthorResponse {
  successful: boolean;
  result: Author;
}

export interface UserResponse {
  successful: boolean;
  result: User;
}
