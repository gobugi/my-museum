import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworksComponent } from './artworks.component';

const routes: Routes = [
    { path: 'artworks', component: ArtworksComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ArtworksRoutingModule {

}
