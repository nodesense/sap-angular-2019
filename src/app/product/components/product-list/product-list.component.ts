import { CartService } from './../../../cart/services/cart.service';
import { CartItem } from './../../../cart/models/cart-item';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products$: Observable<Product[]>;


  // products: Product[];
  subscription: Subscription;
  
  constructor(private productService: ProductService, 
              private cartService: CartService) {

   }

  ngOnInit() {
    this.products$ = this.productService.getProducts();

    //  this.subscription = this.productService.getProducts()
    //      .subscribe( products => {
    //        this.products = products;
    //      });

  }

  ngOnDestroy() {
  //  this.subscription.unsubscribe();
  }

  addToCart(product: Product) {
    const item: CartItem = new CartItem();
    item.id = product.id;
    item.name = product.name;
    item.price = product.price;
    item.qty = 1;

    this.cartService.addItem(item);
  }

  deleteProduct(id: number){

  }

}
