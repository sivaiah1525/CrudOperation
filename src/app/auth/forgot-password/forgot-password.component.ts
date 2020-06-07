import { async } from '@angular/core/testing';
import { LoginService } from './../../service/auth/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotform: FormGroup;
  forgotpassword = false;
  constructor(
    private router: Router,
    private loginserve: LoginService,
    private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.forgotform = new FormGroup({
      mailId: new FormControl(null, [Validators.required]),
    });
  }

  async savedata(data) {
    try {
      const result = await this.loginserve.forgotpassword(data);
      localStorage.setItem('mailId', this.forgotform.value.mailId);
      this.forgotpassword = true;

    } catch (error) {
      this.toastr.success('invalidate Email');
      console.log(error);
    }

  }

}
