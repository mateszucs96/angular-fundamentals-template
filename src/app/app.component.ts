import { Component } from '@angular/core';
import { ButtonText } from '@shared/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'courses-app';
  protected readonly ButtonText = ButtonText;
}
