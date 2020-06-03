import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  private tokenKey = 'AUTH_TOKEN';

  constructor() { }

  saveToken(data) {
    window.localStorage.setItem(this.tokenKey, data);
  }

  getToken() {
    return window.localStorage.getItem(this.tokenKey);
  }

  getDecodedTokendetails() {
    const token = this.getToken();
    if (!token) {
      return null;
    }

    return JSON.parse(window.atob(token.split('.')[1]));

  }

  removeToken() {
    window.localStorage.removeItem(this.tokenKey);
  }
}
