import { CartService } from './../../cart/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // providers: [ // cart service private to header component
  //   CartService
  // ]
})
export class HeaderComponent implements OnInit {

  count: number;
  amount$: Observable<number>;

  constructor(private cartService: CartService) {

    this.amount$ = this.cartService.amount$;

    // value type
    // this.count = this.cartService.count;
    // observer
    this.cartService.count$
                     .subscribe ( value => {
                       this.count = value;
                       console.log('subscriber ', this.count);
                     });
   }

  ngOnInit() {
  }

}
