import { EventEmitter, Injectable } from '@angular/core';
import { Course } from '@shared/models/course.model';
import { mockedCoursesList } from '@shared/mocks/mocks';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Author } from '@shared/models/author.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private API_URL = 'http://localhost:4000';
  private courses: Course[] = [...mockedCoursesList];
  selectedCourse = new EventEmitter<Course>();

  constructor(private http: HttpClient) {}

  getAll(): Observable<{ result: Course[] }> {
    // return this.courses.slice()
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
    // return <Course>this.courses.find(course => course.id === id);
  }

  deleteCourse(id: string) {
    // Add your code here
    return this.http.delete<Course>(`${this.API_URL}/courses/${id}`, {});
  }

  filterCourses(value: string) {
    // Add your code here
    return this.http.get<Course[]>(
      `${this.API_URL}/courses/filter?${value}`,
      {}
    );
  }

  getAllAuthors(): Observable<{ result: Author[] }> {
    // Add your code here
    return this.http.get<{ result: Author[] }>(`${this.API_URL}/authors/all`);
  }

  createAuthor(name: string) {
    // Add your code here
    return this.http.post<Author>(`${this.API_URL}/authors/add`, name);
  }

  getAuthorById(id: string) {
    // Add your code here
    return this.http.delete<Author>(`${this.API_URL}/authors/${id}`);
  }
}
