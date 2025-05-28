import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { IFavourite } from '../../core/model/booklist.model';
import { Store } from '@ngrx/store';
import { getFavouriteAction } from '../../store/actions/book.action';

@Injectable({
  providedIn: 'root'
})
export class GetFavouriteService {
  baseURL=environment.baseUrls.BOOK_API

  constructor(private http:HttpClient,private store:Store) { }

  getFavourite(){
     this.http.get<IFavourite>(`${this.baseURL}/getfavourite`,{withCredentials:true}).subscribe((data)=>{
      this.store.dispatch(getFavouriteAction({payload:data}))
    })
  }
}
