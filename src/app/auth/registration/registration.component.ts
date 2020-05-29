import { CreatuserService } from './../../service/auth/creatuser.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationform: FormGroup;

  constructor(
    private service: CreatuserService,
    private router: Router) { }

  ngOnInit(): void {
    this.registrationform = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      mailId: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  async savedata(data) {
    try {
      const result = await this.service.CreatUser(data);
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }

}
