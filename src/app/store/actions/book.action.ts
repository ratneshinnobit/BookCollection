import { createAction, props } from "@ngrx/store";
import { IBook, IFavourite, IFavouriteBookList, IGenreBook } from "../../core/model/booklist.model";


export const getBook=createAction(
    '[get book] api',
    props<{payload:IGenreBook[]}>(),


)

export const getAllBooksAction=createAction(
    '[get all books] api',
    props<{payload:IBook[]}>()
)
export const getFavouriteAction=createAction(
    '[get favourite books] api',
    props<{payload:IFavourite}>()
)