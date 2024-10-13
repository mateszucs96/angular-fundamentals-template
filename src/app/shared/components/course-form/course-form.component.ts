import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ButtonText, ButtonType, IconNames } from '@shared/models/button.model';
import { mockedAuthorsList } from '@shared/mocks/mocks';
import { Author } from '@shared/models/author.model';
import { v4 as uuidv4 } from 'uuid';
import { UserStoreService } from '@app/user/services/user-store.service';
import { CoursesStoreService } from '@app/services/courses-store.service';
import { Course } from '@shared/models/course.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  courseForm!: FormGroup;
  allAuthors: Author[] = [];
  courseAuthors: Author[] = [];
  protected readonly ButtonText = ButtonText;
  protected readonly IconNames = IconNames;

  constructor(
    public fb: FormBuilder,
    public library: FaIconLibrary,
    private courseStoreService: CoursesStoreService
  ) {
    library.addIconPacks(fas);
    this.buildForm();
    this.courseStoreService.getAllAuthors();
    this.courseStoreService.authors$.subscribe(authors => {
      this.allAuthors = authors;
    });
  }

  buildForm() {
    this.courseForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      authors: this.fb.array([]),
      newAuthor: this.fb.group({
        author: [
          '',
          [Validators.minLength(2), Validators.pattern('^[a-zA-Z0-9]*$')],
        ],
      }),
      duration: [0, [Validators.required, Validators.min(0)]],
    });
  }

  addAuthorToCourse(author: Author) {
    this.allAuthors = this.allAuthors.filter(athr => athr.id !== author.id);

    this.courseAuthors.push(author);
    this.courseAuthorsArray.push(this.fb.control(author.id));
  }

  removeAuthorFromCourse(author: Author) {
    this.courseAuthors = this.courseAuthors.filter(
      athr => athr.id !== author.id
    );

    this.allAuthors.push(author);

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
        id: uuidv4(),
        name: authorName,
      };
      console.log(newAuthor);

      this.allAuthors.push(newAuthor);
      this.newAuthorGroup.reset();
    }
  }

  onSubmit() {
    if (!this.courseForm.valid) {
      this.courseForm.markAllAsTouched();
    }

    this.courseStoreService.createCourse(this.courseForm.value);
    console.log(this.courseForm.value);
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
    return this.courseForm.get('authors') as FormArray;
  }

  get newAuthorGroup() {
    return this.courseForm.get('newAuthor') as FormGroup;
  }

  protected readonly ButtonType = ButtonType;
}
