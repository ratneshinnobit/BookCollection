import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IBook, IFavouriteBookList, IGenreBook } from "../../core/model/booklist.model";


const getBookByGenreState=createFeatureSelector<IGenreBook[]>('books')
const getAllBookState=createFeatureSelector<IBook[]>('allBooks')
const getFavouriteBookState=createFeatureSelector<IFavouriteBookList>('favouriteBook')


export const booksSelector=createSelector(
    getBookByGenreState,
    (state:IGenreBook[])=>state
)
export const getAllBooksSelector=createSelector(
    getAllBookState,
    (state:IBook[])=>state
)
export const getFavouriteBookSelector=createSelector(
    getFavouriteBookState,
    (state:IFavouriteBookList)=>state
)