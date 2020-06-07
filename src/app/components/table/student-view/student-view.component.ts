import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  studentdetails: any;
  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private location: Location,

  ) {
    this.studentView();
  }

  ngOnInit(): void {
  }
  studentView() {
    this.router.params.subscribe(params => {
      this.studentdetails = params;
    });
  }

  editstudent() {
    this.location.back();
  }

}
