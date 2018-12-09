import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']

})
export class SingUpComponent implements OnInit {
  regForm = this.fb.group(
    { 
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      isAdmin: [false, Validators.required],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    }
  );

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    
  }

}
