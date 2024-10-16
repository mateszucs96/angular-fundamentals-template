import { Injectable } from '@angular/core';
import { Course } from '@shared/models/course.model';
import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Author } from '@shared/models/author.model';
import { catchError, Observable, throwError } from 'rxjs';
import { BASE_URL } from '../../environments/environment';
import { ApiEndpoint } from '@shared/models/urlPath.model';
import { Router } from '@angular/router';
import {
  AllAuthorsResponse,
  AllCourseResponse,
  AuthorResponse,
  CreateAuthorResponse,
  CreateCourseResponse,
  EditCourseResponse,
  FilterCourseResponse,
} from '@shared/models/apiResponse.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  getAll(): Observable<AllCourseResponse> {
    return this.http.get<AllCourseResponse>(
      `${BASE_URL}${ApiEndpoint.COURSES}/all`
    );
  }

  createCourse(course: Course): Observable<CreateCourseResponse> {
    return this.http.post<CreateCourseResponse>(
      `${BASE_URL}${ApiEndpoint.COURSES}/add`,
      course
    );
  }

  editCourse(id: string, course: Course): Observable<EditCourseResponse> {
    return this.http.put<EditCourseResponse>(
      `${BASE_URL}${ApiEndpoint.COURSES}/${id}`,
      course
    );
  }

  getCourse(id: string): Observable<any> {
    return this.http
      .get<{ result: Course }>(`${BASE_URL}${ApiEndpoint.COURSES}/${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            // If 404 error, navigate back to the course list
            this.router.navigate(['/courses']);
          }
          return throwError(() => new Error('Course not found'));
        })
      );
  }

  deleteCourse(id: string) {
    // Add your code here
    return this.http.delete(`${BASE_URL}${ApiEndpoint.COURSES}/${id}`);
  }

  filterCourses(value: string): Observable<FilterCourseResponse> {
    return this.http.get<FilterCourseResponse>(
      `${BASE_URL}${ApiEndpoint.COURSES}/filter?title=${value}`
    );
  }

  getAllAuthors(): Observable<AllAuthorsResponse> {
    return this.http.get<AllAuthorsResponse>(
      `${BASE_URL}${ApiEndpoint.AUTHORS}/all`
    );
  }

  createAuthor({ name }: { name: string }): Observable<CreateAuthorResponse> {
    return this.http.post<CreateAuthorResponse>(
      `${BASE_URL}${ApiEndpoint.AUTHORS}/add`,
      {
        name,
      }
    );
  }

  getAuthorById(id: string): Observable<AuthorResponse> {
    return this.http.get<AuthorResponse>(
      `${BASE_URL}${ApiEndpoint.AUTHORS}/${id}`
    );
  }
}
