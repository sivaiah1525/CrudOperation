import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenservService {

  data: any;
  constructor() { }

  savetoken(data) {
    window.localStorage.setItem('pushtoken', data);
  }
  getpushtoken() {
    return window.localStorage.getItem('pushtoken');
  }
}
