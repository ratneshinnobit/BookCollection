import { createReducer, on } from "@ngrx/store"
import { cartAction } from "../actions/cart.action"
import { ITotalCartItem } from "../../core/model/cartItems.model"


export const initialState: ITotalCartItem = {
    totalItemInCart: 0,
    cartItemIds: [],
    success: false,
    message: ''
  };

  export const cartReducer = createReducer(
    initialState,
    on(cartAction, (state, { totalItemInCart, cartItemIds, success, message }) => ({
      ...state,
      totalItemInCart: totalItemInCart,
      cartItemIds,
      success,
      message
    }))
  );