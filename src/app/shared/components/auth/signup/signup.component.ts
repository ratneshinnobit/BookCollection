import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../../../environment/environment';
import { SignupService } from '../../../../core/auth/signup.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  baseUrl=environment.baseUrls.api


  signupForm!:FormGroup

  constructor(private _fb:FormBuilder,private signupService:SignupService,private router: Router){}

  passwordMatchValidator(control:any){
    if (this.signupForm && control.value !== this.signupForm.get('password')?.value) {
      return { mismatch: true };
    }
    return null;

  }

  ngOnInit(): void {
    this.signupForm=this._fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(26)]],
      confirmPassword: ['', [Validators.required]]
    })
  }

  onSubmit(){
   this.signupService.signup(this.signupForm.value)

   this.signupForm.reset()
  }

  

}
