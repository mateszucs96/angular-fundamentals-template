import { Component, Input, OnInit } from '@angular/core';
import { mapAuthorIdsToNames } from '@app/utilities/author-utils';
import { mockedAuthorsList } from '@shared/mocks/mocks';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() creationDate!: string;
  @Input() duration!: number;
  @Input() authors!: string[];
  @Input() isEditable = false;
  authorsNames: string[] = [];

  ngOnInit() {
    this.authorsNames = mapAuthorIdsToNames(this.authors, mockedAuthorsList);
  }
}
