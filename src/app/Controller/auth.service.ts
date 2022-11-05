import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../Models/loginUser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { RegisterUser } from '../Models/registerUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router,
    private alertifyService: AlertifyService
  ) { }

  path = "http://localhost:5270/Auth/";
  userToken: any;
  decodedToken: any;
  TOKEN_KEY = 'token';

  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");

    this.http.post(this.path + "login", loginUser, { headers: headers }).subscribe((data) => {
      this.saveToken(data);
      this.userToken = data;
      this.decodedToken = this.jwtHelper.decodeToken(data.toString());
      this.alertifyService.success('Sisteme giriş yapıldı');
      this.router.navigateByUrl('/city');
    });
  }

  register(registerUser: RegisterUser){
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");

    this.http.post(this.path + 'register', registerUser, {headers: headers}).subscribe((data) => {

    });
  }

  saveToken(token: any){
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logOut(){
    localStorage.removeItem(this.TOKEN_KEY);
  }

  loggedIn(){
    //return tokenNotExpired(this.TOKEN_KEY);
  }

  getCurrentUserId(){
    //return this.jwtHelper.decodeToken(localStorage.getItem(this.TOKEN_KEY)).nameid
  }

}
