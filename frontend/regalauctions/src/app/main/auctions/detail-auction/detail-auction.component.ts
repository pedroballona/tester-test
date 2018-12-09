import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Auction } from 'src/entity';
import { AuctionService } from 'src/auction.service';

@Component({
  selector: 'app-detail-auction',
  templateUrl: './detail-auction.component.html',
  styleUrls: ['./detail-auction.component.css']
})
export class DetailAuctionComponent implements OnInit {
  auction: Auction;
  id: number;
  private sub: any;

  constructor(private loginService: LoginService, private router: Router, private auctionService: AuctionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];

      this.getAuction();
    });
  }

  private getAuction() {
    this.auctionService.getRecord(this.id).then((auction) => {
      this.auction = auction;
    }).catch((_) => {
      this.router.navigate(['login']);
    });
  }

  get ended(): boolean {
    return this.auction != null && this.auction.ending_date != null; 
  }


  async end() {
    try {
      await this.auctionService.endAuction(this.auction);
      this.getAuction();
    } catch (error) {
      this.loginService.clearToken();
      this.router.navigate(['login']);
    }
  }

}
