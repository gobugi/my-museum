import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-artworks-list',
    templateUrl: './artworks-list.component.html'
})
export class ArtworksListComponent implements OnInit {

    filteredArtworks: any[] = [];
    constructor() {}

    ngOnInit() {

    }
}
