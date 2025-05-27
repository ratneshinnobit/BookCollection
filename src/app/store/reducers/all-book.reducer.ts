import { createReducer, on } from "@ngrx/store";
import { IBook } from "../../core/model/booklist.model";
import { getAllBooksAction } from "../actions/book.action";



const initialState:IBook[]=[]

export const  allBookReducer=createReducer(
    initialState,
    on(getAllBooksAction,(state,action)=>[...action.payload])
)

