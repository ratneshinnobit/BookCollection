import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { GetCartitemService } from './get-cartitem.service';

@Injectable({
  providedIn: 'root'
})
export class IncreaseQuantityService {
  baseURL=environment.baseUrls.CART_API

  constructor(private http: HttpClient,private gettotalcartitem:GetCartitemService) { }

  increaseQuantity(cartId:string, cartItemId:string) {
    this.http.patch(`${this.baseURL}/incrementcartitem`,{cartId,cartItemId},{withCredentials:true}).subscribe({
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
