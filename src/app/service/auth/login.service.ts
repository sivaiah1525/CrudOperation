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
    const url = 'http://localhost:6000/login';
    return this.http.post(url, data).toPromise();
  }
  forgotpassword(data){
    const url = 'http://localhost:6000/maill/forgotpassword';
    return this.http.post(url, data).toPromise();

  }
  resetpassword(data){
    const url = 'http://localhost:6000/update/resetpassword';
    return this.http.post(url, data).toPromise();
  }
}
