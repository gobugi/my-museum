import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtworksComponent }  from './artworks.component';
import { ArtworksListComponent } from './artworks-list/artworks-list.component';
import { FilterComponent } from './artworks-list/filter.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ ArtworksComponent, ArtworksListComponent, FilterComponent ],
  exports: [ ArtworksComponent ]
})
export class ArtworksModule { }
