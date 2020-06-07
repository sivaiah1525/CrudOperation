import { LoginService } from './../../service/auth/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetform: FormGroup;

  constructor(
    private router: Router,
    private loginserve: LoginService,
    private toastr: ToastrService,
    private snackBar: MatSnackBar,

  ) {
    console.log(this.router);
  }

  ngOnInit(): void {
    this.resetform = new FormGroup({
      Newpassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      Cfmpassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  async savedata(data) {
    try {
      const updatedata = {
        password: data.Newpassword,
        mailId: localStorage.getItem('mailId')
      };
      const resuilt = await this.loginserve.resetpassword(updatedata);
      console.log(resuilt);
      localStorage.removeItem('mailId');
      this.router.navigate(['/login']);
      this.toastr.success('successful resetpassword');

    } catch (error) {
      console.log(error);
      this.toastr.success('failed resetpassword');

    }
  }
}
