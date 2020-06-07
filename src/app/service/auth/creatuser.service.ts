import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreatuserService {

  constructor(private http: HttpClient) { }

  CreatUser(data) {
    const url = 'http://localhost:4000/registration';
    return this.http.post(url, data).toPromise();

  }
}
