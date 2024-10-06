import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonText } from '@shared/models/button.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() placeholder!: string;
  @Output() search = new EventEmitter<string>();
  searchQuery = '';
  protected readonly ButtonText = ButtonText;

  onSearch(): void {
    this.search.emit(this.searchQuery);
  }
}
