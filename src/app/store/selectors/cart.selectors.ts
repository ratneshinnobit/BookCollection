import { createFeatureSelector, createSelector } from "@ngrx/store";

import { ITotalCartItem } from "../../core/model/cartItems.model";


const getCartState=createFeatureSelector<ITotalCartItem>('cart')

export const cartSelector=createSelector(
    getCartState,
    (state:ITotalCartItem)=>state
)