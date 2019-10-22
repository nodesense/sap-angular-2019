import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';

@NgModule({
  declarations: [ // for private use within module
    AddressComponent,
    // private component 1, 2, 3, 4
  ],
  imports: [
    CommonModule
  ],

  exports: [ // make the component public to other module
    // subset of declared components
    AddressComponent
  ]
})
export class SharedModule { }
