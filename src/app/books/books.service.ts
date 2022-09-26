import { Injectable } from '@angular/core';
import { Book } from '../types/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BooksService {
  Books:Book[]=[];
  constructor() { 
    let c = localStorage.getItem('book-list');
    if(c!=null){
      this.Books = JSON.parse(c);
    }
  }
  getBooks(): Book[] {
    return this.Books;
  }
  addBooks(book:Book){
    this.Books.push(book);
    localStorage.setItem('book-list',JSON.stringify(this.Books));
  }
}
