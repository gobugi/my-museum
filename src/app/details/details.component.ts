import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';
import { IArtwork } from '../shared/interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: [ './details.component.css' ]
})
export class DetailsComponent implements OnInit {

  artwork: IArtwork;
  details: any;

  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id')!;
    this.dataService.getDetails(id).subscribe((details: any) => {
      this.details = details;
    });


    this.dataService.getArtwork(id).subscribe((artwork: IArtwork) => {
      this.artwork = artwork;
    });
  }

}
