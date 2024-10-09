import { EventEmitter, Injectable } from '@angular/core';
import { Course } from '@shared/models/course.model';
import { mockedCoursesList } from '@shared/mocks/mocks';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: Course[] = [...mockedCoursesList];
  selectedCourse = new EventEmitter<Course>();
  getAll() {
    return this.courses.slice();
  }

  createCourse(course: any) {
    // replace 'any' with the required interface
    // Add your code here
  }

  editCourse(id: string, course: any) {
    // replace 'any' with the required interface
    // Add your code here
  }

  getCourse(id: string): Course {
    return <Course>this.courses.find(course => course.id === id);
  }

  deleteCourse(id: string) {
    // Add your code here
  }

  filterCourses(value: string) {
    // Add your code here
  }

  getAllAuthors() {
    // Add your code here
  }

  createAuthor(name: string) {
    // Add your code here
  }

  getAuthorById(id: string) {
    // Add your code here
  }
}
