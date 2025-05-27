
export interface Book {
    _id: string;
    title: string;
    author: string;
    genre: string;
    description: string;
    image: string;
    price: number;
    quantity: number;
    createdAt: string; 
    updatedAt: string; 
  }
  

export interface ICartItem {
    _id: string;
    cartId: string;
    bookId: Book;
    quantity: number;
    __v: number;
    updatedAt: string;
}

export interface ITotalCartItem {
    success: boolean;
    message: string;
    totalItemInCart: number;
    cartItemIds: ICartItem[];
}

export interface TotalAmountResponse {
    success: boolean;
    message: string;
    totalPrice: number;
  }
  