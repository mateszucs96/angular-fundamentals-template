import { Component, OnInit } from '@angular/core';
import { Course } from '@shared/models/course.model';
import { CoursesStoreService } from '@app/services/courses-store.service';
import { Observable } from 'rxjs';
import { UserStoreService } from '@app/user/services/user-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // mappedCourses: { course: Course; authorsNames: string[] }[] = [];
  courses!: Course[];
  selectedCourse!: Course | null;
  courseForEdit!: Course;
  isAdmin!: boolean;

  constructor(
    private coursesStoreService: CoursesStoreService,
    private userService: UserStoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.coursesStoreService.getAll();
    this.coursesStoreService.getAllAuthors();
    this.coursesStoreService.courses$.subscribe(data => (this.courses = data));
    this.userService.getUser();
    this.userService.isAdmin$.subscribe(isAdmin => (this.isAdmin = isAdmin));
  }

  onShowCourse(course: Course) {
    this.selectedCourse = course;
    console.log(this.selectedCourse);
    this.router.navigate(['courses', course.id]);
  }

  onEditCourse(course: Course) {
    this.courseForEdit = course;
    this.router.navigate(['courses/edit', course.id]);
  }

  onDeleteCourse(course: Course) {
    this.coursesStoreService.deleteCourse(course.id);
  }

  onSearch(searchInput: string): void {
    // TODO: add logic to filter courses based on input
  }
}
