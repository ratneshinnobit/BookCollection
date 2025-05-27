import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { ValueServiceService } from '../value-service.service';
import { GetCartitemService } from './get-cartitem.service';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  baseURL=environment.baseUrls.CART_API

  constructor(private http:HttpClient,private getCartService:GetCartitemService) { }

  addToCartService(bookId:string){
    this.http.post(`${this.baseURL}/addtocart`,{bookId:bookId},{withCredentials:true}).subscribe((data)=>{
      if (data) {
        this.getCartService.getTotalItemInCart()
      }
    })

  }



}
