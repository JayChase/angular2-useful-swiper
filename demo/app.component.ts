import { Component, OnInit } from '@angular/core';

import { DemoComponent } from './demo.component';

@Component({
  selector: 'demo-app',
  templateUrl: './demo/app.component.html',
  styleUrls: ['./demo/app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Demo app';
  description = 'Demo the library here by adding using the demo component. Separated from app to make unit testing easier.';

  constructor() {

  }

  ngOnInit() {

  }
}
