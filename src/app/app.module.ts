import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { ArtworksModule } from './artworks/artworks.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsModule } from './details/details.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ArtworksModule,
    DetailsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
