import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {


  constructor(private http: HttpClient) { }


  CreatStudent(data) {
    const url = 'http://localhost:5000/user/student';
    return this.http.post(url, data).toPromise();
  }
  GetStudentlist() {
    const url = 'http://localhost:5000/user/student/all';
    return this.http.get(url).toPromise();
  }

  // deletbyid
  StudentDeletById(data) {
    // console.log(data);
    const url = 'http://localhost:5000/user/student/deletbyid';
    return this.http.post(url, { id: data }).toPromise();
  }

}
