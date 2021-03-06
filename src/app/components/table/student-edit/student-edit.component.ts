import { TableService } from './../../../service/tableserv/table.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  studentdetails: any;
  studenteditdetails: any;
  constructor(
    private router: ActivatedRoute,
    private location: Location,
    private service: TableService,
    private toastr: ToastrService,

  ) {
    this.studentEdit();
  }

  ngOnInit(): void {
    this.studenteditdetails = new FormGroup({
      id: new FormControl(this.studentdetails._id),
      studentname: new FormControl(this.studentdetails.studentname, [Validators.required]),
      Fathername: new FormControl(this.studentdetails.Fathername, [Validators.required]),
      mailId: new FormControl(this.studentdetails.mailId, [Validators.required]),
      RollNo: new FormControl(this.studentdetails.RollNo, [Validators.required]),
      DOF: new FormControl(this.studentdetails.DOF, [Validators.required]),
      Rank: new FormControl(this.studentdetails.Rank, [Validators.required]),
      Departent: new FormControl(this.studentdetails.Departent, [Validators.required]),
    });
  }
  studentEdit() {
    this.router.params.subscribe(params => {
      this.studentdetails = params;
    });
  }
  cancel() {
    this.location.back();
  }

  // updateStudent Details
  UpdateStudent(data) {
    try {
      this.service.StudentUpdateById(data);
      this.location.back();
      this.toastr.success('UpdateStudent successful');
    } catch (error) {
      console.log(error);
    }
  }

}
