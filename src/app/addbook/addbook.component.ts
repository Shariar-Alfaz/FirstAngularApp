import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../books/books.service';
import { Book } from '../types/book';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {
  form:Book = {} as Book;
  constructor(private bookService:BooksService) { }

  ngOnInit(): void {
  }
  submit(){
    this.bookService.addBooks(this.form);
  }

}
