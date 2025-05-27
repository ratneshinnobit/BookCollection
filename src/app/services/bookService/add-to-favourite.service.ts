import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class AddToFavouriteService {
  baseURL=environment.baseUrls.BOOK_API

  constructor(private http:HttpClient,private bookservice:BookService) { }

  addToFavourite(bookId:string,genre:string){
    this.http.patch(`${this.baseURL}/addtofavourite`,{bookId},{withCredentials:true}).subscribe((data)=>{
        this.bookservice.getAllBooks()
        this.bookservice.getBookByGenre(genre)
    })

  }
}
