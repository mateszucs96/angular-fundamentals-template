import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTogglePassword]',
  exportAs: 'togglePassword',
})
export class TogglePasswordDirective {
  private isPasswordVisible = false;

  @HostBinding('attr.type') inputType = 'password';

  togglePassword(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.inputType = this.isPasswordVisible ? 'text' : 'password';
  }

  get isVisible(): boolean {
    return this.isPasswordVisible;
  }
}
