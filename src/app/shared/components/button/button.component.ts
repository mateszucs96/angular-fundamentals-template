import { Component, Input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faPencil,
  faTrashCan,
  IconPrefix,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonText, IconNames } from '@shared/models/button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonText?: ButtonText;
  @Input() iconName?: IconNames;

  readonly iconPrefix: IconPrefix = 'fas';

  constructor(library: FaIconLibrary) {
    library.addIcons(faTrashCan, faPencil);
  }
}
