import { CartItem } from './../models/cart-item';
import { Injectable } from '@angular/core';

// BehaviorSubject keeps hold of last kknown values
// if anyone subscribe, immediately calls the publish with last known value

import {Subject, BehaviorSubject} from 'rxjs';

// business logic
// communication with web service
// help component to share the data without input/output
// contains application state

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private _amount: number = 0;
  private _totalItems: number = 0;

  amount$: BehaviorSubject<number> = new BehaviorSubject(this._amount);
  count$: BehaviorSubject<number> = new BehaviorSubject(this._totalItems);
  items$: BehaviorSubject<CartItem[]> = new BehaviorSubject(this.cartItems);

  constructor() {
     console.log('Cart Service Created');
  }

  get items() {
    return this.cartItems;
  }

  // ES6, getter and setter
  // use this as property
  get amount() {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
    // publish the data change
    this.amount$.next(this._amount); 
  }

  get count() {
    return this._totalItems;
  }

  set count(value: number) {
    this._totalItems = value;
    this.count$.next(this._totalItems);
  }

  private calculate(): void {
     let count = 0;
     let amount = 0;

     for (const item of this.cartItems) {
       count += item.qty;
       amount += item.price * item.qty;
     }

     // setter
     this.amount = amount;
     this.count = count;

     console.log("amount, count", this.amount, this.count)

     this.items$.next(this.cartItems); // publish cart items
  }

  addItem(item: CartItem) {
    this.cartItems.push(item);
    this.calculate();

  }

  removeItem(id: number){
     const index = this.cartItems.findIndex(item => item.id === id);
     if (index >= 0) {
       this.cartItems.splice(index, 1);
     }

     this.calculate();
  }

  updateQty(id: number, qty: number) {
    const item: CartItem = this.cartItems.find(item => item.id === id);
    if (item) {
      item.qty = qty;
    }

    this.calculate();
  }

  emptyCart() {
    // this.cartItems.splice(0, this.cartItems.length);
    this.cartItems = []; // assign new obj
    this.calculate();
  }

}
