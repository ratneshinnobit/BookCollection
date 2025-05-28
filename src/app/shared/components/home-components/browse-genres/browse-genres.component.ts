import { Component, OnInit } from '@angular/core';
import { books } from '../../../../data/bookData';
import { CommonModule } from '@angular/common';
import { GenresCardComponent } from "../../common/genres-card/genres-card.component";
import { BookService } from '../../../../services/bookService/book.service';
import { Store } from '@ngrx/store';
import { IGenreBook } from '../../../../core/model/booklist.model';
import { booksSelector, getFavouriteBookSelector } from '../../../../store/selectors/book.selector';
import { Observable } from 'rxjs';
import { GetFavouriteService } from '../../../../services/bookService/get-favourite.service';

@Component({
  selector: 'app-browse-genres',
  standalone: true,
  imports: [CommonModule, GenresCardComponent],
  templateUrl: './browse-genres.component.html',
  styleUrl: './browse-genres.component.css'
})
export class BrowseGenresComponent implements OnInit {
  books$!: Observable<IGenreBook[]>
  isActiveGenre = 'Classic'
  currentGenreBookList: any = []
  favouriteBookList!: string[]
  constructor(private bookService: BookService, private store: Store, private getFavourateBookService: GetFavouriteService) { }

  genresList = [
    "Classic", "Random", "Adventure", "Designing", "Science", "Fiction", "History", "Learning"
  ]

  getBookData(genre: string) {
    return books.filter((books) => books.genre === genre)
  }
  updateGenre(genre: string) {
    console.log("genres", genre)
    this.isActiveGenre = genre
    // this.currentGenreBookList=this.getBookData(genre)
    this.bookService.getBookByGenre(genre)
  }

  ngOnInit(): void {
    this.bookService.getBookByGenre("Classic")
    this.books$ = this.store.select(booksSelector);
    this.getFavourateBookService.getFavourite()
    this.store.select(getFavouriteBookSelector).subscribe((data) => {
      this.favouriteBookList = data.favouriteBooks

    })
    console.log("data bok",this.favouriteBookList)
  }



}
