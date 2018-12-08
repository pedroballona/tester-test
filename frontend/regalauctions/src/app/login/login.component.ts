import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  error: boolean = false;  

  constructor(private fb: FormBuilder, 
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  async onSubmit() {
    if(this.loginForm.valid) {
      try {
        this.loginService.clearToken();
        let token = await this.loginService
          .auth(this.loginForm.value.username, this.loginForm.value.password);
        this.router.navigate(['main'])
      } catch (error) {
        this.error = true;
      }
    }
  }

}
