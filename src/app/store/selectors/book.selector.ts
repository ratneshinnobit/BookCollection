import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IBook, IGenreBook } from "../../core/model/booklist.model";


const getBookByGenreState=createFeatureSelector<IGenreBook[]>('books')
const getAllBookState=createFeatureSelector<IBook[]>('allBooks')


export const booksSelector=createSelector(
    getBookByGenreState,
    (state:IGenreBook[])=>state
)
export const getAllBooksSelector=createSelector(
    getAllBookState,
    (state:IBook[])=>state
)