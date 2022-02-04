import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ArtworksModule } from './artworks/artworks.module';
import { SharedModule } from  './shared/shared.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ArtworksModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
