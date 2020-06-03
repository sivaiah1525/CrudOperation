import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {


  constructor(private http: HttpClient) { }

  // creatStudent New
  CreatStudent(data) {
    const url = 'http://localhost:5000/user/student';
    return this.http.post(url, data).toPromise();
  }

  // GetStudent LIST
  GetStudentlist(limit, skip, sort, search) {
    console.log(search);
    const params: any = {
      limit,
      skip,
      sort,
      search
    };
    const url = 'http://localhost:5000/user/student/all';
    return this.http.get(url, { params }).toPromise();
  }

  // deletbyid
  StudentDeletById(data) {
    const url = 'http://localhost:5000/user/student/deletbyid';
    return this.http.post(url, { id: data }).toPromise();
  }
  // Updatebyid
  StudentUpdateById(data) {

    const url = 'http://localhost:5000/user/student/updatebyid';
    return this.http.put(url, data).toPromise();
  }

}
