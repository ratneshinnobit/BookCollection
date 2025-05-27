import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { LucideAngularModule, Heart } from 'lucide-angular';
import { AddToCartService } from '../../../../services/cart/add-to-cart.service';
import { Store } from '@ngrx/store';
import { cartSelector } from '../../../../store/selectors/cart.selectors';
import { IncreaseQuantityService } from '../../../../services/cart/increase-quantity.service';
import { DecreaseQuantityService } from '../../../../services/cart/decrease-quantity.service';
import { AddToFavouriteService } from '../../../../services/bookService/add-to-favourite.service';
@Component({
  selector: 'app-genres-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './genres-card.component.html',
  styleUrl: './genres-card.component.css'
})
export class GenresCardComponent implements OnInit {
  @Input() bookDetails!: any
  @Input( ) genre!:string
  readonly Heart = Heart
  // bookIds!: string[]
  bookNotInCart: boolean = false;
  quantity!:any
  cartId!:string
  cartItemId!:string

  constructor(private cartService: AddToCartService, private store: Store,private incrementService:IncreaseQuantityService,private decrementService:DecreaseQuantityService,private addToFavourite:AddToFavouriteService) { }

  textClip(text: string) {
    const clipedText = text.slice(0, 80);
    return clipedText.concat("...")

  }
  ngOnInit(): void {
    this.store.select(cartSelector).subscribe((data) => {
      let bookId=data.cartItemIds.some((cartItem)=>cartItem.bookId._id===this.bookDetails._id)
      this.bookNotInCart=!bookId
      const cartItem = data.cartItemIds.find((cartItem: any) => {
        const cartBookId = typeof cartItem.bookId === 'string'
          ? cartItem.bookId
          : cartItem.bookId?._id;
      
        return cartBookId === this.bookDetails._id;
      });
      
      this.quantity = cartItem ? cartItem.quantity : 1; 

      this.cartId=cartItem?.cartId as string
      this.cartItemId=cartItem?._id as string
      
    });
    

    
   

  }


  handleAddToCart(bookId:string){
    this.cartService.addToCartService(bookId)
    this.store.select(cartSelector).subscribe((data) => {
      let bookId=data.cartItemIds.some((cartItem)=>cartItem.bookId._id===this.bookDetails._id)
      this.bookNotInCart=!bookId
    });


  }
  decrementQuantity(){
    console.log("decrementdata",this.cartId,this.cartItemId)
    this.decrementService.decreaseQuantity(this.cartId,this.cartItemId)


  }
  incrementQuantity(){
    console.log("incrementdata",this.cartId,this.cartItemId)
    this.incrementService.increaseQuantity(this.cartId,this.cartItemId)

  }
  handleAddToFavourite(bookId:string){
    this.addToFavourite.addToFavourite(bookId,this.genre)


  }
 
  

}
