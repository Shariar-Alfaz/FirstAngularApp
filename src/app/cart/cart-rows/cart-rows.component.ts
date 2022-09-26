import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-cart-rows',
  templateUrl: './cart-rows.component.html',
  styleUrls: ['./cart-rows.component.scss']
})
export class CartRowsComponent implements OnInit {
  @Input() b: Book = {} as Book;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  remove(){
    this.cartService.removeItem(this.b);
  }

}
