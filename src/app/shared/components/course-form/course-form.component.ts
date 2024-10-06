import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ButtonText, IconNames } from '@shared/models/button.model';
import { mockedAuthorsList } from '@shared/mocks/mocks';
import { Author } from '@shared/models/author.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  courseForm!: FormGroup;
  authors: Author[] = [...mockedAuthorsList];
  courseAuthors: Author[] = [];
  protected readonly ButtonText = ButtonText;
  protected readonly IconNames = IconNames;

  constructor(
    public fb: FormBuilder,
    public library: FaIconLibrary
  ) {
    library.addIconPacks(fas);
    this.buildForm();
  }

  // ngOnInit() {
  //   // this.courseForm = this.fb.group({
  //   //   title: ['', [Validators.required, Validators.minLength(2)]],
  //   //   description: ['', [Validators.required, Validators.minLength(2)]],
  //   //   courseAuthors: this.fb.array([]),
  //   //   newAuthor: this.fb.group({
  //   //     author: [
  //   //       '',
  //   //       [Validators.minLength(2), Validators.pattern('^[a-zA-Z0-9]*$')],
  //   //     ],
  //   //   }),
  //   //   duration: [0, [Validators.required, Validators.min(0)]],
  //   // });
  // }

  buildForm() {
    this.courseForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      courseAuthors: this.fb.array([]),
      newAuthor: this.fb.group({
        author: [
          '',
          [Validators.minLength(2), Validators.pattern('^[a-zA-Z0-9\\s]+$')],
        ],
      }),
      duration: [0, [Validators.required, Validators.min(0)]],
    });
  }

  get title() {
    return this.courseForm.get('title');
  }

  get description() {
    return this.courseForm.get('description');
  }

  get newAuthor() {
    return this.courseForm.get('newAuthor.author');
  }

  get duration() {
    return this.courseForm.get('duration');
  }

  get courseAuthorsArray() {
    return this.courseForm.get('courseAuthors') as FormArray;
  }

  get newAuthorGroup() {
    return this.courseForm.get('newAuthor') as FormGroup;
  }

  addAuthorToCourse(author: Author) {
    this.authors = this.authors.filter(athr => athr.id !== author.id);

    this.courseAuthors.push(author);
    this.courseAuthorsArray.push(this.fb.control(author));
  }

  removeAuthorFromCourse(author: Author) {
    this.courseAuthors = this.courseAuthors.filter(
      athr => athr.id !== author.id
    );

    this.authors.push(author);

    const index = this.courseAuthorsArray.controls.findIndex(
      c => c.value.id === author.id
    );
    if (index >= 0) {
      this.courseAuthorsArray.removeAt(index);
    }
  }

  createNewAuthor() {
    const authorName = this.newAuthorGroup.get('author')?.value;

    if (authorName && authorName.length >= 2) {
      const newAuthor = {
        id: Math.floor(Math.random() * 1000).toString(),
        name: authorName,
      };

      this.authors.push(newAuthor);
      this.newAuthorGroup.reset();
    }
  }

  onSubmit() {
    if (!this.courseForm.valid) {
      this.courseForm.markAllAsTouched();
    }
  }
}
