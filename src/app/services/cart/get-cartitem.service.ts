import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { ITotalCartItem } from '../../core/model/cartItems.model';
import { Store } from '@ngrx/store';
import { cartAction } from '../../store/actions/cart.action';

@Injectable({
  providedIn: 'root'
})
export class GetCartitemService {
  baseURl=environment.baseUrls.CART_API

  constructor(private http:HttpClient,private store:Store) { }

  getTotalItemInCart() {
    this.http.get<ITotalCartItem>(`${this.baseURl}/gettotalcartitem`, {
      withCredentials: true
    }).subscribe({
      next: (data: ITotalCartItem) => {
       
        this.store.dispatch(cartAction({
          cartItemIds: data.cartItemIds,
          totalItemInCart: data.totalItemInCart,
          success: data.success,
          message: data.message
        }));
      },
      error: (error) => {
        console.error("Error fetching cart data", error);
 
      }
    });
  }
  


}
