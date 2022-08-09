import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  BookService: BookService;
  livros: any;
  constructor(bookService: BookService) {
    this.BookService = bookService;
  }

  ngOnInit(): void {
    this.livros = this.BookService.getBook().subscribe((data) => {
      this.livros = data;
    });
  }
}
