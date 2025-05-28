import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { BookService } from './book.service';
import { GetFavouriteService } from './get-favourite.service';

@Injectable({
  providedIn: 'root'
})
export class AddToFavouriteService {
  baseURL=environment.baseUrls.BOOK_API

  constructor(private http:HttpClient,private bookservice:BookService,private getFavouriteBook:GetFavouriteService) { }

  addToFavourite(bookId:string,genre:string){
    this.http.patch(`${this.baseURL}/addtofavourite`,{bookId},{withCredentials:true}).subscribe((data)=>{
        this.bookservice.getAllBooks()
        this.bookservice.getBookByGenre(genre)
        this.getFavouriteBook.getFavourite()

    })

  }
}
