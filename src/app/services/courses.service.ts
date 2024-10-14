import { Injectable } from '@angular/core';
import { Course } from '@shared/models/course.model';
import { HttpClient } from '@angular/common/http';
import { Author } from '@shared/models/author.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private API_URL = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  getAll(): Observable<{ result: Course[] }> {
    return this.http.get<{ result: Course[] }>(`${this.API_URL}/courses/all`);
  }

  createCourse(course: Course) {
    return this.http.post<Course>(`${this.API_URL}/courses/add`, course);
  }

  editCourse(id: string, course: Course): Observable<{ result: Course }> {
    return this.http.put<{ result: Course }>(
      `${this.API_URL}/courses/${id}`,
      course
    );
  }

  getCourse(id: string): Observable<{ result: Course }> {
    return this.http.get<{ result: Course }>(`${this.API_URL}/courses/${id}`);
  }

  deleteCourse(id: string): Observable<{ result: Course }> {
    // Add your code here
    return this.http.delete<{ result: Course }>(
      `${this.API_URL}/courses/${id}`,
      {}
    );
  }

  filterCourses(value: string): Observable<{ result: Course[] }> {
    return this.http.get<{ result: Course[] }>(
      `${this.API_URL}/courses/filter?title=${value}`
    );
  }

  getAllAuthors(): Observable<{ result: Author[] }> {
    return this.http.get<{ result: Author[] }>(`${this.API_URL}/authors/all`);
  }

  createAuthor({ name }: { name: string }): Observable<{ result: Author }> {
    return this.http.post<{ result: Author }>(`${this.API_URL}/authors/add`, {
      name,
    });
  }

  getAuthorById(id: string): Observable<{ result: Author }> {
    return this.http.get<{ result: Author }>(`${this.API_URL}/authors/${id}`);
  }
}
