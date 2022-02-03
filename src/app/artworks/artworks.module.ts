import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtworksComponent }  from './artworks.component';


import { ArtworksListComponent } from './artworks-list/artworks-list.component';


@NgModule({
  imports:      [ CommonModule ],
  declarations: [ ArtworksComponent, ArtworksListComponent ],
  exports: [ ArtworksComponent ]
})
export class ArtworksModule { }
