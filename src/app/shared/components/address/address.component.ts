import { Component, OnInit } from '@angular/core';

// Input, Output
// Input - street, city, state, country
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
