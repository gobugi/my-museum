import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IArtwork } from '../../app/shared/interfaces';

@Injectable()
export class DataService {

    baseUrl: string = 'assets/';

    constructor(private http: HttpClient) { }

    getArtworks() : Observable<IArtwork[]> {
        return this.http.get<IArtwork[]>(this.baseUrl + 'artworks.json')
    }


    getArtwork(id: number) : Observable<IArtwork> {
      return this.http.get<IArtwork[]>(this.baseUrl + 'artworks.json')
        .pipe(
          map(artworks => {
            let artwork = artworks.filter((art: IArtwork) => art.id === id);
            return artwork[0];
          })
        )
    }


    getDetails(id: number) {
      return this.http.get("https://api.artic.edu/api/v1/artworks/" + id)
    }

}
