import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { AuctionService } from 'src/auction.service';

@Component({
  selector: 'app-new-auction',
  templateUrl: './new-auction.component.html',
  styleUrls: ['./new-auction.component.css']
})
export class NewAuctionComponent implements OnInit {
  regForm = this.fb.group(
    {
      name: ['', Validators.required],
      isUsed: [false, Validators.required],
      initialValue: [1, Validators.required],
    }
  );

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService, private auctionService: AuctionService) { }

  ngOnInit() {
  }

  async onSubmit() {
    if(this.regForm.valid) {
      try {
        await this.auctionService.createRecord(this.regForm.value.name, this.regForm.value.initialValue, this.regForm.value.isUsed);
        this.router.navigate(["main"])
      } catch (error) {
        alert("It was not possible to create an auction at this moment");
      }
    }
  }
}
