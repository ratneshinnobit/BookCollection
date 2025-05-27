import { createReducer, on } from "@ngrx/store"
import { IGenreBook } from "../../core/model/booklist.model"
import { getBook } from "../actions/book.action"



const initialState:IGenreBook[]=[]

export const bookReducer=createReducer(
    initialState,
    on(getBook,(state,action)=>[...action.payload])

)