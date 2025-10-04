import { Component, inject } from '@angular/core';
import { GifsService } from '../../services/gifs';
import { GifList } from '../../components/gif-list/gif-list';

@Component({
  selector: 'app-trending-page',
  imports: [GifList],
  templateUrl: './trending-page.html',
  styles: ``
})
export default class TrendingPage {
  gifService = inject(GifsService);
}
