import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/entity';
import { AuctionService } from 'src/auction.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-list-auction',
  templateUrl: './list-auction.component.html',
  styleUrls: ['./list-auction.component.css']
})
export class ListAuctionComponent implements OnInit {
  auctions: Auction[];

  constructor(private auctionService : AuctionService, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.auctionService.listRecords().then((auctions) => {
      this.auctions = auctions;
    }).catch((_) => {
      this.loginService.clearToken();
      this.router.navigate(['login']);
    });
  }

}
