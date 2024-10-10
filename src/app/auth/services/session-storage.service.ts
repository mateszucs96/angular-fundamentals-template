import { Inject, Injectable } from '@angular/core';

const TOKEN = 'SESSION_TOKEN'; // Use this constant for the session storage entry key
// Add your code here

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor(@Inject(Window) private window: Window) {}
  setToken(token: string) {
    this.window.sessionStorage.setItem(TOKEN, token);
    this.getToken();
  }

  getToken(): string | null {
    return this.window.sessionStorage.getItem(TOKEN);
  }

  deleteToken() {
    this.window.sessionStorage.removeItem(TOKEN);
  }

  logToken() {
    console.log(this.window.sessionStorage);
  }
}
