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
    private router: Router
  ) {
    this.ListOfStudentes();
  }
  studentlist: any;
  studentdetails: any;
  skipcont: any;
  sortcount = 1;
  elements: any = [];

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


  studentview(data) {
    this.router.navigate(['/student-view', data]);
  }

  studentedit(data) {
    this.router.navigate(['/student-edit', data ]);
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

   myFunction() {
    // tslint:disable-next-line: one-variable-per-declaration
    let input, filter: any, table, tr, td, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('myTable');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }


  async ListOfStudentes() {
    try {
      const limit = 5;
      this.studentlist = await this.service.GetStudentlist(limit, this.skipcont, this.sortcount);
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

