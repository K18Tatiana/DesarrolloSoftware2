import { Component, input } from '@angular/core';
import { GifList } from '../gif-list/gif-list';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'search-results',
  imports: [GifList],
  templateUrl: './search-results.html',
  styles: ``
})
export class SearchResults {
  searchTerm = input.required<string>();
  searchGifs = input.required<Gif[]>();
}
