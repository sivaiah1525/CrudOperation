import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:5000/user/login';

  constructor(
    private http: HttpClient
  ) { }

  LoginUser(data) {
    return this.http.post(this.url, data).toPromise();
  }
}
