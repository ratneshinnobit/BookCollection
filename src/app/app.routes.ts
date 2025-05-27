import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/pages/home/home.component';
import { AboutComponent } from './shared/components/pages/about/about.component';
import { BooksComponent } from './shared/components/pages/books/books.component';
import { MembershipComponent } from './shared/components/pages/membership/membership.component';
import { LoginComponent } from './shared/components/auth/login/login.component';
import { SignupComponent } from './shared/components/auth/signup/signup.component';
import { CartComponent } from './shared/components/cart-component/cart/cart.component';
import { CheckoutComponent } from './shared/components/checkout/checkout/checkout.component';

export const routes: Routes = [
   { path: "", component: HomeComponent },
   { path: "about", component: AboutComponent },
   { path: "bookstore", component: BooksComponent },
   { path: "membership", component: MembershipComponent },
   { path: "login", component: LoginComponent },
   { path: "signup", component: SignupComponent },
   { path: "cart", component: CartComponent },
   { path: "checkout", component: CheckoutComponent }

];
