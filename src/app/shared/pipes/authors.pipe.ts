import { Pipe, PipeTransform } from '@angular/core';
import { CoursesStoreService } from '@app/services/courses-store.service';

import { Author } from '@shared/models/author.model';

@Pipe({
  name: 'authors',
  pure: false,
})
export class AuthorsPipe implements PipeTransform {
  authors!: Author[];

  constructor(coursesStoreService: CoursesStoreService) {
    coursesStoreService.authors$.subscribe(value => {
      this.authors = value;
    });
  }

  transform(value: string[]): string[] {
    if (!value) return [];
    return value.map(id => {
      const author = this.authors.find(author => {
        return author.id === id;
      });

      return author ? author.name : 'Unknown Author';
    });
  }
}
