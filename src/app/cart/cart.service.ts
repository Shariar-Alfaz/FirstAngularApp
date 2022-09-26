import { Injectable } from '@angular/core';
import { Book } from '../types/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 private cart:Book[] =[];
  constructor() {
    let c =localStorage.getItem('cart');
    if(c!=null){
      this.cart = JSON.parse(c);
    }
    console.log(this.cart);
   }
  addBookToCart(book:Book){
    this.cart.push(book);
    let c = JSON.stringify(this.cart);
    localStorage.setItem('cart',c);
  }
  getBooks():Book[]{
    return this.cart;
  }
  removeItem(book:Book){
    this.cart = this.cart.filter((b)=> b!=book);
    console.log(this.cart);
    let c = JSON.stringify(this.cart);
    localStorage.setItem('cart',c);
  }
}
