import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-artworks></app-artworks>
  `,
  styles: [`
    h1 {
      color: red;
    }
  `]
})
export class AppComponent {
  constructor() { }

  ngOnInit() {

  }
}
