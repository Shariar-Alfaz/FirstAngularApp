import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Book } from '../types/book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private cartServices:CartService) { }

  ngOnInit(): void {
  }
  getCart():Book[]{
    return this.cartServices.getBooks();
  }


}
