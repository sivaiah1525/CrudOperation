import { PushNotificationService } from './../../service/push-notification.service';
import { CreatuserService } from './../../service/auth/creatuser.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationform: FormGroup;

  constructor(
    private service: CreatuserService,
    private router: Router,
    private toastr: ToastrService,
    private PushNotificationServ: PushNotificationService
  ) { }

  ngOnInit(): void {
    this.registrationform = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      mailId: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  async savedata(data) {
    try {
      const notification = await this.PushNotificationServ.Getpushnotification();
      console.log(notification);
      const result = await this.service.CreatUser(data);
      this.router.navigate(['/login']);
      this.toastr.success('Registration successful');
    } catch (error) {
      console.log(error);
      this.toastr.success('Registration failed');

    }
  }

}
