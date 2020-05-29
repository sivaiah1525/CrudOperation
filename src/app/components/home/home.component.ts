import { async } from '@angular/core/testing';
import { TableService } from './../../service/tableserv/table.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  studentlist: any;
  studentdetails: any;
  constructor(
    private service: TableService,
    private toastr: ToastrService
  ) {
    this.ListOfStudentes();
  }

  ngOnInit(): void {
    this.studentdetails = new FormGroup({
      studentname: new FormControl(null, [Validators.required]),
      Fathername: new FormControl(null, [Validators.required]),
      mailId: new FormControl(null, [Validators.required]),
      RollNo: new FormControl(null, [Validators.required]),
      DOF: new FormControl(null, [Validators.required]),
      Rank: new FormControl(null, [Validators.required]),
      Departent: new FormControl(null, [Validators.required]),
    });
  }




  async ListOfStudentes() {
    try {
      this.studentlist = await this.service.GetStudentlist();
      console.log(this.studentlist);
    } catch (error) {
      console.log(error);
    }

  }
  async CreatNewStudent(data) {
    try {
      await this.service.CreatStudent(data);
      this.ListOfStudentes();
      this.toastr.success('CreatStudent successful');
    } catch (error) {
      console.log(error);
    }
  }

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

