import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { User } from './models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user=new User;
 
  constructor(private authSvc: AuthServiceService,private router:Router) { }

  ngOnInit(): void {
    this. initForm();
  }
  initForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required]),      //mandatory field
      password: new FormControl('',[Validators.required]),   //mandatory field
    });
  }
  checkUserForLogin(){
    if(this.loginForm.valid)
    {
      this.user.email=this.loginForm.value.email;
      this.user.password=this.loginForm.value.password;
       this.authSvc.login(this.user).subscribe(
      result=>{
        if(result.status==200)
        {
        this.router.navigate(['../home']);
        }
        else 
        {
          this.router.navigate(['../login']);
        }
    }

      );
    }
  }
 
}
