import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search-input',
  imports: [FormsModule],
  templateUrl: './search-input.html',
  styles: ``
})
export class SearchInput {
  placeholder = input<string>('Buscar gifs...');
  searchTerm = output<string>();

  private searchValue = signal<string>('');

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.searchValue.set(value);
    this.searchTerm.emit(value);
  }

  get value() {
    return this.searchValue();
  }
}
