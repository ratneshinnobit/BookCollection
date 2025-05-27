import { createAction, props } from "@ngrx/store";
import { IBook, IGenreBook } from "../../core/model/booklist.model";


export const getBook=createAction(
    '[get book] api',
    props<{payload:IGenreBook[]}>(),


)

export const getAllBooksAction=createAction(
    '[get all books] api',
    props<{payload:IBook[]}>()
)