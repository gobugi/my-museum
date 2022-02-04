import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';
import { IArtwork } from '../shared/interfaces';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent implements OnInit {
  mainTitle: string;
  art: any[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.mainTitle = 'Welcome to My Museum';
    this.dataService.getArtworks()
      .subscribe((artworks: IArtwork[]) => this.art = artworks);
  }

}
