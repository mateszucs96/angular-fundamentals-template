import { Component } from '@angular/core';
import { ButtonText } from '@shared/components';
import { SessionStorageService } from '@app/auth/services/session-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'courses-app';
  protected readonly ButtonText = ButtonText;

  constructor(sessionStorage: SessionStorageService) {
    sessionStorage.logToken();
  }
}
