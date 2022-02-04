import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details-routing.module';

@NgModule({
    imports: [ CommonModule, FormsModule, DetailsRoutingModule ],
    declarations: [ DetailsComponent ]
})
export class DetailsModule { }
