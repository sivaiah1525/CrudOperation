import { LoginService } from './../../service/auth/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  constructor(
    private service: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      mailId: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });

  }

 async savedata(data) {
    try {
      const token = await this.service.LoginUser(data);
      console.log(token);
      this.router.navigate(['/home']);
    } catch (error) {
      console.log(error);
    }
  }

}
