import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize } from 'rxjs';
import { Course } from '@shared/models/course.model';
import { CoursesService } from '@app/services/courses.service';
import { Author } from '@shared/models/author.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesStoreService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  private selectedCourse$$ = new BehaviorSubject<Course | null>(null);
  private selectedAuthor$$ = new BehaviorSubject<Author | null>(null);
  private courses$$ = new BehaviorSubject<Course[]>([]);
  private authors$$ = new BehaviorSubject<Author[]>([]);

  public isLoading$ = this.isLoading$$.asObservable();
  public selectedCourse$ = this.selectedCourse$$.asObservable();
  public selectedAuthor$ = this.selectedAuthor$$.asObservable();
  public courses$ = this.courses$$.asObservable();
  public authors$ = this.authors$$.asObservable();

  constructor(private coursesService: CoursesService) {}

  getAll() {
    // Add your code here
    this.isLoading$$.next(true);

    this.coursesService
      .getAll()
      .pipe(finalize(() => this.isLoading$$.next(false)))
      .subscribe(courses => {
        this.courses$$.next(courses.result);
      });
  }

  createCourse(course: Course) {
    this.coursesService.createCourse(course).subscribe(course => {
      this.courses$$.next([...this.courses$$.getValue(), course.result]);
      this.getAll();
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

  editCourse(id: string, course: Course) {
    return this.coursesService
      .editCourse(id, course)
      .subscribe(updatedCourse => {
        const currentCourses = this.courses$$.value;
        const idx = currentCourses.findIndex(course => course.id === id);
        const updatedCourses = [...currentCourses];
        updatedCourses[idx] = updatedCourse.result;
        this.courses$$.next(updatedCourses);
        this.getAll();
      });
  }

  deleteCourse(id: string) {
    this.coursesService
      .deleteCourse(id)
      .subscribe(() =>
        this.courses$$.next(
          this.courses$$.value.filter(course => course.id !== id)
        )
      );
    this.getAll();
  }

  filterCourses(value: string) {
    this.coursesService.filterCourses(value).subscribe(courses => {
      this.courses$$.next(courses.result);
    });
  }

  getAllAuthors() {
    // Add your code here
    this.coursesService.getAllAuthors().subscribe(authors => {
      this.authors$$.next(authors.result);
    });
  }

  createAuthor({ name }: { name: string }) {
    this.coursesService.createAuthor({ name }).subscribe(author => {
      this.authors$$.next([...this.authors$$.getValue(), author.result]);
    });
    this.getAllAuthors();
  }

  getAuthorById(id: string) {
    this.coursesService
      .getAuthorById(id)
      .subscribe(author => this.selectedAuthor$$.next(author.result));
  }
}
