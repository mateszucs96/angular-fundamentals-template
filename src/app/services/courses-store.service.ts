import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize } from 'rxjs';
import { Course } from '@shared/models/course.model';
import { CoursesService } from '@app/services/courses.service';
import { error } from '@angular/compiler-cli/src/transformers/util';
import { Author } from '@shared/models/author.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesStoreService {
  private selectedCourse$$ = new BehaviorSubject<Course | null>(null);
  private courses$$ = new BehaviorSubject<Course[]>([]);
  private authors$$ = new BehaviorSubject<Author[]>([]);
  private isLoading$$ = new BehaviorSubject<boolean>(false);

  public courses$ = this.courses$$.asObservable();
  public authors$ = this.authors$$.asObservable();
  public isLoading$ = this.isLoading$$.asObservable();
  public selectedCourse$ = this.selectedCourse$$.asObservable();

  constructor(private coursesService: CoursesService) {}

  getAll() {
    // Add your code here
    this.isLoading$$.next(true);

    this.coursesService
      .getAll()
      .pipe(finalize(() => this.isLoading$$.next(false)))
      .subscribe(courses => {
        this.courses$$.next(courses.result);
        console.log(courses.result);
      });
  }

  createCourse(course: Course) {
    this.coursesService.createCourse(course).subscribe(course => {
      console.log(course);
      this.courses$$.next([...this.courses$$.getValue(), course]);
    });
  }

  getCourse(id: string) {
    // Add your code here
    this.isLoading$$.next(true);
    this.coursesService
      .getCourse(id)
      .pipe(finalize(() => this.isLoading$$.next(false)))
      .subscribe(course => {
        this.selectedCourse$$.next(course.result);
      });
  }

  editCourse(id: string, course: any) {
    // replace 'any' with the required interface
    // Add your code here
  }

  deleteCourse(id: string) {
    this.coursesService.deleteCourse(id).subscribe(() => {
      const courses = this.courses$$.getValue();
      const updatedCourse = courses.filter(course => course.id !== id);
      this.courses$$.next(updatedCourse);
    });
  }

  filterCourses(value: string) {
    this.coursesService.filterCourses(value).subscribe(courses => {
      this.courses$$.next(courses);
    });
  }

  getAllAuthors() {
    // Add your code here
    this.coursesService.getAllAuthors().subscribe(authors => {
      this.authors$$.next(authors.result);
    });
  }

  createAuthor(name: string) {
    // Add your code here
  }

  getAuthorById(id: string) {
   // this.coursesService.getAuthorById(id).subscribe(author => {
   //   this.
   // })
  }
}
