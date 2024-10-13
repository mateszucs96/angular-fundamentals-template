import { Component, OnInit } from '@angular/core';
import { Course } from '@shared/models/course.model';
import { CoursesStoreService } from '@app/services/courses-store.service';
import { Observable } from 'rxjs';
import { UserStoreService } from '@app/user/services/user-store.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // mappedCourses: { course: Course; authorsNames: string[] }[] = [];
  courses!: Course[];
  selectedCourse!: Course | null;

  constructor(
    private coursesStoreService: CoursesStoreService,
    private userService: UserStoreService
  ) {}

  ngOnInit() {
    this.coursesStoreService.getAll();
    this.coursesStoreService.courses$.subscribe(data => (this.courses = data));
    this.userService.getUser();
  }

  onSearch(searchInput: string): void {
    // TODO: add logic to filter courses based on input
  }
}
