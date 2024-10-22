import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ButtonText, ButtonType, IconNames } from '@shared/models/button.model';
import { Author } from '@shared/models/author.model';
import { CoursesStoreService } from '@app/services/courses-store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '@app/services/courses.service';
import { CoursesStateFacade } from '@app/store/courses/courses.facade';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  courseForm!: FormGroup;
  isEditMode!: boolean;
  courseId!: string;
  allAuthors: Author[] = [];
  courseAuthors: Author[] = [];
  protected readonly ButtonText = ButtonText;
  protected readonly IconNames = IconNames;
  protected readonly ButtonType = ButtonType;

  constructor(
    public fb: FormBuilder,
    public library: FaIconLibrary,
    private courseStoreService: CoursesStoreService,
    private courseService: CoursesService,
    private coursesFacade: CoursesStateFacade,
    private route: ActivatedRoute,
    private router: Router
  ) {
    library.addIconPacks(fas);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.courseId = params['id'];
        this.courseStoreService.authors$.subscribe(authors => {
          this.allAuthors = authors;
        });
        this.loadCourseForEdit();
      } else {
        this.courseStoreService.authors$.subscribe(authors => {
          this.allAuthors = authors;
        });
        this.buildForm();
      }
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

  loadCourseForEdit() {
    this.buildForm();
    this.courseService.getCourse(this.courseId).subscribe(course => {
      this.courseForm.patchValue({
        title: course.result.title,
        description: course.result.description,
        duration: course.result.duration,
      });
      const authorsFormArray = this.courseForm.get('authors') as FormArray;
      const courseAuthorsArray = this.allAuthors.filter(author =>
        course.result.authors.includes(author.id)
      );

      course.result.authors.forEach((author: string) => {
        authorsFormArray.push(this.fb.control(author));
        this.allAuthors = this.allAuthors.filter(athr => athr.id !== author);
      });
      courseAuthorsArray.forEach(author => this.courseAuthors.push(author));
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
    const index = this.courseAuthorsArray.controls.findIndex(c => {
      return c.value === author.id;
    });
    this.courseAuthorsArray.removeAt(index);
  }

  createNewAuthor() {
    const authorName = this.newAuthorGroup.get('author')?.value;

    if (authorName && authorName.length >= 2) {
      const newAuthor = {
        name: authorName,
      };
      this.courseStoreService.createAuthor(newAuthor);

      this.allAuthors.push(<Author>newAuthor.name);
      this.newAuthorGroup.reset();
    }
  }

  onClickCancel() {
    this.router.navigate(['courses']);
  }

  onSubmit() {
    if (!this.courseForm.valid) {
      this.courseForm.markAllAsTouched();
      return;
    }
    if (this.isEditMode) {
      this.coursesFacade.editCourse(this.courseId, this.courseForm.value);
    } else {
      this.coursesFacade.createCourse(this.courseForm.value);
    }
    this.router.navigate(['/courses']);
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
}
