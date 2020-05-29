import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreatuserService {
  url = 'http://localhost:5000/user/creat';

  constructor(private http: HttpClient) { }

  CreatUser(data) {
    return this.http.post(this.url, data).toPromise();

  }
}
