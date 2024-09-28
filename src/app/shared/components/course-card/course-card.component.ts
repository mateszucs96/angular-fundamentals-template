import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { mapAuthorIdsToNames } from '@app/utilities/author-utils';
import { mockedAuthorsList } from '@shared/mocks/mocks';
import { Course } from '@features/courses/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input() course!: Course;
  @Input() isEditable = true;
  authorsNames: string[] = [];

  ngOnInit() {
    this.authorsNames = mapAuthorIdsToNames(
      this.course.authors,
      mockedAuthorsList
    );
  }

  @Output() showCourse = new EventEmitter<Course>();
  clickOnShow(course: Course) {
    this.showCourse.emit(course);
    console.log(course);
  }
}
