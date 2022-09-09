import {HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './components/login/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
private loginUrl="https://localhost:7023/Home/login";

  constructor(private http:HttpClient) { }
  //authenticate user based on response from our api
  
  login(user:User):Observable<any>{
    return this.http.post(this.loginUrl,user)
  }


  //get data from api
  getdata(){
  let url="https://localhost:7023/Home/movies";
  return this.http.get<any>(url);
  }
}
