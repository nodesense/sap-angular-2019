import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { PowerPipe } from './pipes/power.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [ // for private use within module
    AddressComponent,
    PowerPipe, 
    FilterPipe, 
    HighlightDirective,
    // private component 1, 2, 3, 4
  ],
  imports: [
    CommonModule
  ],

  exports: [ // make the component public to other module
    // subset of declared components
    AddressComponent,
    PowerPipe, 
    FilterPipe, 
    HighlightDirective,
  ]
})
export class SharedModule { }
