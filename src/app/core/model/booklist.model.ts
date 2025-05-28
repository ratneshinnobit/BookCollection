export interface IBookList {
    id: number,
    image: string,
    heading: string,
    description: string,
    color: any

}

export interface IGenreBook {
    _id: string,
    title: string,
    gernre: string,
    description: string,
    image: string
}

export interface IBook {
    _id: string,
    title: string,
    author: string,
    gernre: string,
    description: string,
    image: string,
    price: string
}

export interface IFavourite{
    success:string;
    message:string;
    data:string[]
}


export interface IFavouriteBookList{
    favouriteBooks:string[]
}
