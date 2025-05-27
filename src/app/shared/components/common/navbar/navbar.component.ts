import { CommonModule, NumberSymbol } from '@angular/common';
import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAuthenticated } from '../../../../store/selectors/auth.selector';
import { authAction } from '../../../../store/actions/auth.action';
import { navbarDataList } from '../../../../data/nav-data';
import { GetCartitemService } from '../../../../services/cart/get-cartitem.service';
import { cartSelector } from '../../../../store/selectors/cart.selectors';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isAutenticated$!: Observable<boolean>
  isSticky: boolean = false;
  logo: string = "BB";
  navbarDataList = navbarDataList
  totalCartItem$!: number
 

  constructor(private store: Store, private cartService: GetCartitemService) {
    this.isAutenticated$ = this.store.select(selectIsAuthenticated)

  }



  trackByFn(id: number) {
    return this.navbarDataList[id]

  }




  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isSticky = offset > 0;
  }

  logout() {
    this.store.dispatch(authAction.logout())
    localStorage.removeItem("auth-token")
  }

  showMobileMenu = false;

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  ngOnInit(): void {
    
    this.cartService.getTotalItemInCart()

    let data = this.store.select(cartSelector)
    data.subscribe((data) => {
      console.log("data",data)
      this.totalCartItem$ = data.totalItemInCart
      console.log("total item data",this.totalCartItem$)
    })


  }

  handleCart() {

  }











}
