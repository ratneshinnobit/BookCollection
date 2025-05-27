import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Store } from '@ngrx/store';
import { getAllBooksAction, getBook } from '../../store/actions/book.action';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl = environment.baseUrls.api

  constructor(private http: HttpClient, private store: Store) { }

  getBookByGenre(genre: string) {
    this.http.get(` ${this.baseUrl}/books/bygenre?genre=${genre}`, { withCredentials: true }).subscribe((data: any) => {
      console.log("data", data);
      this.store.dispatch(getBook({ payload: data?.books }))

    })
  }

  getAllBooks() {
    this.http.get(` ${this.baseUrl}/books/getallbooks`, { withCredentials: true }).subscribe((data: any) => {
      console.log("data", data);
      this.store.dispatch(getAllBooksAction({ payload: data?.data }))

    })
  }
}
