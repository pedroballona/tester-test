import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';
import { UserResponse } from 'src/entity';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: UserResponse;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginService.getUser().then((user) => {
      this.user = user;
    })
  }

  logOff() {
    if(this.loginService.isAuthenticated) {
      this.loginService.clearToken();
      this.router.navigate(["login"])
    }
  }

}
