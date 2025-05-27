import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { TotalAmountResponse } from '../../core/model/cartItems.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTotalPriceService  {
 baseURL=environment.baseUrls.CART_API

  constructor(private http:HttpClient) { }
  getTotalPrice(): Observable<TotalAmountResponse> {
    return this.http.get<TotalAmountResponse>(
      `${this.baseURL}/totalcartprice`,
      { withCredentials: true }
    );
  }




}
