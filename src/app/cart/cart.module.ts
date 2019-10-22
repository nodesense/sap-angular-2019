import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';



@NgModule({
  declarations: [
    CartComponent,
    CartSummaryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
