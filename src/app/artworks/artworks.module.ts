import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ArtworksComponent }  from './artworks.component';
import { ArtworksListComponent } from './artworks-list/artworks-list.component';
import { FilterComponent } from './artworks-list/filter.component';
import { ArtworksRoutingModule } from './artworks-routing.module';

@NgModule({
  imports:      [ CommonModule, FormsModule, ArtworksRoutingModule ],
  declarations: [ ArtworksComponent, ArtworksListComponent, FilterComponent ],
  exports: [ ArtworksComponent ]
})
export class ArtworksModule { }
