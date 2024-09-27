export class Course {
  constructor(
    public title: string,
    public description: string,
    public id: string,
    public creationDate: string,
    public duration: number,
    public authors: string[]
  ) {}
}
