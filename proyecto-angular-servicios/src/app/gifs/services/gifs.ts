import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interfaces';
import { GifMapper } from '../../mapper/gif.mapper';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.urlBase}/gifs/trending`, {
      params: {
        api_key: environment.apiKey,
        limit: '50'
      }
    }).subscribe((response) => {
      const gifs = GifMapper.mapGiphyItemsToGifsArray(response.data);
      this.trendingGifs.set(gifs);
      console.log(gifs);
    });
  }
}
