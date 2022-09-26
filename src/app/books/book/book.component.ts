import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
 @Input() B: Book = {} as Book;
 isAdded:boolean = false;
  constructor(private cartService: CartService) {
   }

  ngOnInit(): void {
    if(this.cartService.getBooks().find((b)=> b.name===this.B.name)!=null){
      this.isAdded=true;
  }
  }
  addToCart():void{
    //console.log(this.B);
    //this.emitBook.emit(this.B);
    this.cartService.addBookToCart(this.B);
    this.isAdded=true;
  }
  removeFromCart(){
    this.cartService.removeItem(this.B);
    this.isAdded = false;
  }
}
