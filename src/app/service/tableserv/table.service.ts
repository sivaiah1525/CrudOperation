import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {


  constructor(private http: HttpClient) { }

  // creatStudent New
  CreatStudent(data) {
    const url = 'http://localhost:4000/newstudent';
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
    const url = 'http://localhost:4000/student/all';
    return this.http.get(url, { params }).toPromise();
  }

  // deletbyid
  StudentDeletById(data) {
    const url = 'http://localhost:4000/student/deletbyid';
    return this.http.post(url, { id: data }).toPromise();
  }
  // Updatebyid
  StudentUpdateById(data) {

    const url = 'http://localhost:4000/student/updatebyid';
    return this.http.put(url, data).toPromise();
  }

}
