import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/common/navbar/navbar.component';
import { FooterComponent } from './shared/components/common/footer/footer.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './core/auth/login.service';
import { Store } from '@ngrx/store';
import { authAction } from './store/actions/auth.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {
  title = 'bookcollection';
  constructor(private  store:Store){}
  ngOnInit(): void {
    if ( localStorage.getItem("auth-token")) {
     this.store.dispatch(authAction.login({payload:{isAuthenticated:true,token:""}}))
      
    }

  
    
  }


}
