import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authReducer } from './store/reducers/auth.reducer';
import { bookReducer } from './store/reducers/book.reducer';
import { provideToastr } from 'ngx-toastr';
import { cartReducer } from './store/reducers/cart.reducer';
import { allBookReducer } from './store/reducers/all-book.reducer';
import { favouriteBookReducer } from './store/reducers/favourite-book.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideStore(
    {
      auth:authReducer,
      books:bookReducer,
      cart:cartReducer,
      allBooks:allBookReducer,
      favouriteBook:favouriteBookReducer
    }
  ), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),provideToastr()]
};
