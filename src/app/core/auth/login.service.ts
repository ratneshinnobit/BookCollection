import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { ILogin } from '../model/loginData.model';
import { Store } from '@ngrx/store';
import { authAction } from '../../store/actions/auth.action';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURl = environment.baseUrls.api

  constructor(private http: HttpClient,private store:Store,private router:Router,private toastr: ToastrService) {}
  login(loginData:ILogin) {

    this.http.post(`${this.baseURl}/auth/login`,loginData,{withCredentials:true}).subscribe((token)=>{
      localStorage.setItem("auth-token",JSON.stringify(token))
      this.store.dispatch(authAction.login({payload:{isAuthenticated:true,token:""}}))
      this.router.navigate([""])
      this.toastr.success("login successfull","",{timeOut:1000})

    },(error)=>{
      this.toastr.error("login failed")
      console.error("error",error)

    })


  }

}
