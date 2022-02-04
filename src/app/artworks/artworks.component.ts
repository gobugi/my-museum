import { Component, OnInit } from '@angular/core';

import { IArtwork } from '../shared/interfaces';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent implements OnInit {
  title: string;
  art: IArtwork[];

  constructor() { }

  ngOnInit(): void {
    this.title = 'Works from the Art Institute of Chicago';
    this.art = [
      {
        "id": 869,
        "title": "The Watermill with the Great Red Roof",
        "main_reference_number": "1894.1031",
        "department_title": "Painting and Sculpture of Europe",
        "artist_title": "Meindert Hobbema"
      },
      {
        "id": 2189,
        "title": "Ready-to-Wear",
        "main_reference_number": "1956.137",
        "department_title": "Arts of the Americas",
        "artist_title": "Stuart Davis"
      },
      {
        "id": 2816,
        "title": "Interior at Nice",
        "main_reference_number": "1956.339",
        "department_title": "Modern Art",
        "artist_title": "Henri Matisse"
      },
      {
        "id": 4081,
        "title": "Gian Lodovico Madruzzo",
        "main_reference_number": "1929.912",
        "department_title": "Painting and Sculpture of Europe",
        "artist_title": "Giovanni Battista Moroni"
      },
      {
        "id": 4428,
        "title": "Mère Grégoire",
        "main_reference_number": "1930.78",
        "department_title": "Painting and Sculpture of Europe",
        "artist_title": "Gustave Courbet"
      },
    ];
  }

}
