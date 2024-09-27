import { Author } from './author.model';

export function mapAuthorIdsToNames(
  authorIds: string[],
  allAuthors: Author[]
): string[] {
  return authorIds.map(id => {
    const author = allAuthors.find(author => author.id === id);
    return author ? author.name : 'No author';
  });
}
