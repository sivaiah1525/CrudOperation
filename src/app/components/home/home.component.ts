import { Location } from '@angular/common';
import { TableService } from './../../service/tableserv/table.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private service: TableService,
    private toastr: ToastrService,
    private router: Router,
    private location: Location
  ) {
    this.ListOfStudentes();
  }
  studentlist: any;
  studentdetails: any;
  skipcont: any;
  sortcount = 1;
  search = '';

  ngOnInit(): void {
    this.studentdetails = new FormGroup({
      studentname: new FormControl(null, [Validators.required]),
      Fathername: new FormControl(null, [Validators.required]),
      mailId: new FormControl(null, [Validators.required]),
      RollNo: new FormControl(null, [Validators.required]),
      DOF: new FormControl(null, [Validators.required]),
      Rank: new FormControl('A', [Validators.required]),
      Departent: new FormControl('mech', [Validators.required]),
    });
  }

  print(event) {
    this.search = event.target.value;
    this.ListOfStudentes();
  }

  studentview(data) {
    this.router.navigate(['/studentview', data]);
  }

  studentedit(data) {
    this.router.navigate(['/studentedit', data]);
  }
  pagination(data) {
    this.skipcont = data;
    this.ListOfStudentes();
  }
  pagesort() {
    if (this.sortcount === 1) {
      this.sortcount = -1;
      return this.ListOfStudentes();
    }
    else {
      this.sortcount = 1;
      return this.ListOfStudentes();
    }
  }


  // ListOfStudentes
  async ListOfStudentes() {
    try {
      const limit = 5;
      this.studentlist = await this.service.GetStudentlist(limit, this.skipcont, this.sortcount, this.search);
    } catch (error) {
      console.log(error);
    }

  }
  // CreatNewStudent
  async CreatNewStudent(data) {
    try {
      await this.service.CreatStudent(data);
      this.ListOfStudentes();
      this.toastr.success('CreatStudent successful');
    } catch (error) {
      console.log(error);
    }
  }
  // studentByIdDelet
  async studentByIdDelet(data) {
    try {
      await this.service.StudentDeletById(data);
      this.ListOfStudentes();
      this.toastr.success('Detete successful');

    } catch (error) {
      console.log(error);
    }
  }


}

