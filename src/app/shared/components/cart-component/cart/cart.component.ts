import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITotalCartItem, TotalAmountResponse } from '../../../../core/model/cartItems.model';
import { cartSelector } from '../../../../store/selectors/cart.selectors';
import { IncreaseQuantityService } from '../../../../services/cart/increase-quantity.service';
import { DecreaseQuantityService } from '../../../../services/cart/decrease-quantity.service';
import { CommonModule } from '@angular/common';
import { GetTotalPriceService } from '../../../../services/cart/get-total-price.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cartData!:ITotalCartItem
  totalPrice!:any

 
  
  constructor(private router:Router,private store:Store,private incrementService:IncreaseQuantityService,private decrementService:DecreaseQuantityService,private totalPriceServive:GetTotalPriceService){}

  ngOnInit(): void {
    this.store.select(cartSelector).subscribe((cart)=>{
      this.cartData=cart
    })
    this.getTotalPriceFxn()
   
  }

  decreaseQuantity(cartId:string,cartItemId:string){
    // console.log("decrementdata",this.cartId,this.cartItemId)
    this.decrementService.decreaseQuantity(cartId,cartItemId)
    this.getTotalPriceFxn()


  }
 increaseQuantity(cartId:string,cartItemId:string){
    // console.log("incrementdata",this.cartId,this.cartItemId)
     this.incrementService.increaseQuantity(cartId,cartItemId)
    this.getTotalPriceFxn()

  }

  getTotalPriceFxn(){
    this.totalPriceServive.getTotalPrice().subscribe((data)=>{
      this.totalPrice=data.totalPrice

    })

  }

  handleCheckout(){
    this.router.navigate(["/checkout"])

  }
  
 

  

}
