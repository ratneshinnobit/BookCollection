import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookService } from '../../../../services/bookService/book.service';
import { IBook } from '../../../../core/model/booklist.model';
import { getAllBooksSelector } from '../../../../store/selectors/book.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { GenresCardComponent } from '../../common/genres-card/genres-card.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule,GenresCardComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  allBooks$!:Observable<IBook[]>

  constructor(private store:Store,private getAllBookService:BookService){}

  ngOnInit(): void {
    this.getAllBookService.getAllBooks()
    this.allBooks$=this.store.select(getAllBooksSelector)
    
  }



}
