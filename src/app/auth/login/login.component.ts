import { TokenServiceService } from './../../service/token-service.service';
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
  JWTtoken: any;
  constructor(
    private service: LoginService,
    private router: Router,
    private tokenserv: TokenServiceService
  ) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      mailId: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });

  }

  async savedata(data) {
    try {
      this.JWTtoken = await this.service.LoginUser(data);
      this.tokenserv.saveToken(this.JWTtoken);
      this.router.navigate(['/home']);
    } catch (error) {
      alert('invalid mailid password');
      console.log(error);
    }
  }

}
