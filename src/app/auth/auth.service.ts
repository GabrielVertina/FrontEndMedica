import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API = "http://localhost:8080/auth";

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {

    return this.http.post(`${this.API}/login`, {
      email,
      password
    });


  }

  register(name:string,email:string,password:string) {
return this.http.post(`${this.API}/register`, {
  name,
  email,
  password
})

  }




}
