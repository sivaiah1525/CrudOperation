import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  LoginUser(data) {
    const url = 'http://localhost:5000/user/login';
    return this.http.post(url, data).toPromise();
  }
  forgotpassword(data){
    const url = 'http://localhost:5000/forgotpassword';
    return this.http.post(url, data).toPromise();

  }
  resetpassword(data){
    const url = 'http://localhost:5000/resetpassword';
    return this.http.post(url, data).toPromise();
  }
}
