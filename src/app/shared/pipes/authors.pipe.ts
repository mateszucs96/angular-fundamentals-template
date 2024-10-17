import { Pipe, PipeTransform } from '@angular/core';

import { Author } from '@shared/models/author.model';

@Pipe({
  name: 'authors',
})
export class AuthorsPipe implements PipeTransform {
  transform(ids: string[], authors: Author[] | null): string[] {
    if (!ids || !authors) return [];
    return ids.map(id => {
      const author = authors.find(author => author.id === id);
      return author ? author.name : 'Unknown Author';
    });
  }
}
