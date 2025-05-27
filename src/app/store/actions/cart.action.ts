import { createAction, props } from "@ngrx/store";
import { ICartItem, ITotalCartItem } from "../../core/model/cartItems.model";



export const cartAction = createAction(
    '[Cart] Update Cart',
    props<{
        totalItemInCart: number;
        cartItemIds: ICartItem[];
        success: boolean;
        message: string;
    }>()
);