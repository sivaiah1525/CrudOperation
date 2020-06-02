import { Router } from '@angular/router';
import { TokenServiceService } from './../../service/token-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private tokenserv: TokenServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  logout() {
this.router.navigate(['/login']);
this.tokenserv.removeToken();
  }
}
