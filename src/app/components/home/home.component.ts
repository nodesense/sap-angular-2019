import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  show = true;

  homeCounter = 1000;
  
  constructor() { }

  ngOnInit() {
  }

  // to be called from html on event
  resetHandler(msg: string) {
    console.log('resetHandler called', msg);
    this.homeCounter = 1000;
  }

}
