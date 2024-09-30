import { Component, OnInit } from '@angular/core';
import { mockedAuthorsList, mockedCoursesList } from '@shared/mocks/mocks';
import { Course } from '@shared/models/course.model';
import { mapAuthorIdsToNames } from '@app/utilities/author-utils';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = mockedCoursesList;
  mappedCourses: { course: Course; authorsNames: string[] }[] = [];
  selectedCourse!: Course;

  ngOnInit() {
    this.mappedCourses = this.courses.map(course => ({
      course,
      authorsNames: mapAuthorIdsToNames(course.authors, mockedAuthorsList),
    }));
  }

  onCourseSelected(course: Course) {
    this.selectedCourse = course;
  }
}
