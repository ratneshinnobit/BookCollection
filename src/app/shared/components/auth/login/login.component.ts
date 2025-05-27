import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,NonNullableFormBuilder,ReactiveFormsModule, Validators} from '@angular/forms';
import { LoginService } from '../../../../core/auth/login.service';
import { ILogin } from '../../../../core/model/loginData.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup

  constructor(private _fb:NonNullableFormBuilder,private loginService:LoginService){

  }

  ngOnInit(): void {
    this .loginForm=this._fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.minLength(6),Validators.maxLength(26)]]
    })
  }

  onLogin(){
    this.loginService.login(this.loginForm.value)
    this.loginForm.reset()

  }


}
