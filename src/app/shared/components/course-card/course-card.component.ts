import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Course } from '@shared/models/course.model';
import { ButtonText } from '@shared/components';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input() course!: Course;
  @Input() isEditable!: boolean;
  @Output() clickOnShow = new EventEmitter<Course>();
  protected readonly ButtonText = ButtonText;

  ngOnInit() {
    console.log(this.course);
  }

  onShowCourse() {
    this.clickOnShow.emit(this.course);
  }
}
