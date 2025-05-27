import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { ISignup } from '../model/signup.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
private baseURl = environment.baseUrls.api

  constructor(private http: HttpClient,private router:Router,private toastr: ToastrService) {}
  signup(signupData:ISignup) {

    this.http.post(`${this.baseURl}/auth/signup`,signupData).subscribe(()=>{

    //  alert("signup successfull")
     this.router.navigate(['login'])
     this.toastr.success("signup successfull")
    },(error)=>{
      console.error("error",error)
      this.toastr.error("signup failed")

    })


  }
}
