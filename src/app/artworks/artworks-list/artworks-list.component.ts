import { Component, OnInit, Input } from '@angular/core';

import { IArtwork } from '../../shared/interfaces';
import { SorterService } from '../../core/sorter.service';

@Component({
    selector: 'app-artworks-list',
    templateUrl: './artworks-list.component.html',
    styleUrls: ['./artworks-list.component.css']
})
export class ArtworksListComponent implements OnInit {
    private _artworks: IArtwork[] = [];
    @Input() get artworks(): IArtwork[] {
        return this._artworks;
    }

    set artworks(value: IArtwork[]) {
        if (value) {
            this.filteredArtworks = this._artworks = value;

        }
    }

    filteredArtworks: any[] = [];

    constructor(private sorterService: SorterService) {}

    ngOnInit() {

    }

    filter(data: string) {
        if (data) {
            this.filteredArtworks = this.artworks.filter((art: IArtwork) => {
                return art.title.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                    art.artist_title.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                    art.main_reference_number.indexOf(data.toLowerCase()) > -1 ||
                    art.department_title.toLowerCase().indexOf(data.toLowerCase()) > -1;
            });
        } else {
            this.filteredArtworks = this.artworks;
        }
    }


    sort(prop: (string | number)) {
      this.sorterService.sort(this.filteredArtworks, prop);
    }

}
