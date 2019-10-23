import { CartService } from './../../services/cart.service';
import { CartItem } from './../../models/cart-item';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  // providers: [
  //   CartService
  // ]
})
export class CartComponent implements OnInit {

  // dependency injection
  // angular inspect constructor before creating instance

  items$: Observable<CartItem[]>;

  constructor(private cartService: CartService) {
    console.log('CartComponent created');
    this.items$ = this.cartService.items$;
   }

  ngOnInit() {
     
  }

  addItem() {
    const item: CartItem = new CartItem();
    item.id = Math.ceil(Math.random() * 100000);
    item.name = `Product ${item.id}`;
    item.price = Math.ceil(Math.random() * 100);
    item.qty = 1;
    
    this.cartService.addItem(item);
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
  }

  updateQty(id: number, qty: number) {
    this.cartService.updateQty(id, qty);
  }

  empty() {
    this.cartService.emptyCart();
  }

}
