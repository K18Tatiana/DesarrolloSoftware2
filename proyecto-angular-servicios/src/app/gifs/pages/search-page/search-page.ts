import { Component, inject } from '@angular/core';
import { GifsService } from '../../services/gifs';
import { SearchInput } from '../../components/search-input/search-input';
import { SearchResults } from '../../components/search-results/search-results';

@Component({
  selector: 'app-search-page',
  imports: [SearchInput, SearchResults],
  templateUrl: './search-page.html',
  styles: ``
})
export default class SearchPage {
  gifService = inject(GifsService);

  onSearch(searchTerm: string) {
    this.gifService.searchGifsByTerm(searchTerm);
  }
}
