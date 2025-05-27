import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { GetCartitemService } from './get-cartitem.service';

@Injectable({
  providedIn: 'root'
})
export class DecreaseQuantityService {
  baseURL=environment.baseUrls.CART_API

  constructor(private http: HttpClient,private gettotalcartitem:GetCartitemService) { }


  decreaseQuantity(cartId:string, cartItemId:string) {
    this.http.patch(`${this.baseURL}/decrementcartitem`,{cartId,cartItemId},{withCredentials:true}).subscribe({
      next: (res) => {
        console.log('Quantity decreased:', res);
        this.gettotalcartitem.getTotalItemInCart()
      },
      error: (err) => {
        console.error('Error decreasing quantity:', err);
      }
    });

  }



}

