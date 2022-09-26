import { Component, OnInit } from '@angular/core';
import {Book} from '../types/book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  constructor(private booksService:BooksService) { }
  Books: Book[] =[];
  isShowing:boolean=true;

  ngOnInit(): void {
    this.Books=this.booksService.getBooks();
  }
  handaleClick(event:any):void{
    this.isShowing=!this.isShowing;
    if(this.isShowing){
      event.target.innerHTML = 'Hide Book';
    }else{
      event.target.innerHTML = 'Show Book';
    }
  }
}
