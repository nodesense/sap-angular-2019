import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    // path: 'cart',
    path: '', // default  
    component: CartComponent
  }
];

@NgModule({
  declarations: [
    CartComponent,
    CartSummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    // CartComponent
  ]
})
export class CartModule { }
