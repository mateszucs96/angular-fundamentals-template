import { Component, OnInit } from '@angular/core';
import { mockedAuthorsList, mockedCoursesList } from '@shared/mocks/mocks';
import { Course } from '@shared/models/course.model';
import { mapAuthorIdsToNames } from '@app/utilities/author-utils';
import { CoursesService } from '@app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  mappedCourses: { course: Course; authorsNames: string[] }[] = [];
  selectedCourse!: Course;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.mappedCourses = this.coursesService.getAll().map(course => ({
      course,
      authorsNames: mapAuthorIdsToNames(course.authors, mockedAuthorsList),
    }));
    this.coursesService.selectedCourse.subscribe((course: Course) => {
      this.selectedCourse = course;
    });
  }

  onSearch(searchInput: string): void {
    // TODO: add logic to filter courses based on input
  }
}
