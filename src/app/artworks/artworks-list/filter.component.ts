import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-filter',
    template: `
        Filter: <input type="text" />
    `
})
export class FilterComponent implements OnInit {

    constructor() {}

    ngOnInit() {

    }
}
