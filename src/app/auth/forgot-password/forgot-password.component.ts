import { async } from '@angular/core/testing';
import { LoginService } from './../../service/auth/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private snackBar: MatSnackBar,
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
      const message = 'invalidate Email';
      this.snackBar.open(message, 'close', {
        duration: 2000,
      });
      console.log(error);
    }

  }

}
