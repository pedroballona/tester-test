import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CpfCnpjValidator } from '../cpf-cnpj.validator';
import { User } from 'src/entity';
import { LoginService } from '../login.service';

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
      cpf: ['', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        CpfCnpjValidator.validate]
      ],
      email: ['', [Validators.required, Validators.email]]
    }
  );

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  async onSubmit() {
    if(this.regForm.valid) {
      let user: User = this.regForm.value;
      try {
        this.loginService.clearToken();
        await this.loginService.register(user);
        await this.loginService.auth(user.username, user.password)
        this.router.navigate(['main']);
      } catch (error) {
        alert("Erro ao criar o usuário.");
      }
    }
  }

}
