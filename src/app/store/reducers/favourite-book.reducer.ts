import { createReducer, on } from "@ngrx/store";
import {  IFavouriteBookList } from "../../core/model/booklist.model";
import { getFavouriteAction } from "../actions/book.action";


const initialState:IFavouriteBookList={
    favouriteBooks:[]
}

export const  favouriteBookReducer=createReducer(
    initialState,
    on(getFavouriteAction,(state,action)=>(
        {
            ...state,
            favouriteBooks:action.payload.data
        }
    ))

)