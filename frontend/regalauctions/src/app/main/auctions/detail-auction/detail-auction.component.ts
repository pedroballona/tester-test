import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Auction, Bid } from 'src/entity';
import { AuctionService } from 'src/auction.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-auction',
  templateUrl: './detail-auction.component.html',
  styleUrls: ['./detail-auction.component.css']
})
export class DetailAuctionComponent implements OnInit {
  auction: Auction;
  bids: Bid[];
  id: number;
  private sub: any;
  bidValue = new FormControl(1, Validators.required)

  constructor(private loginService: LoginService, private router: Router, private auctionService: AuctionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];

      this.getAuction();
      this.getBids();
    });
  }

  private getAuction() {
    this.auctionService.getRecord(this.id).then((auction) => {
      this.auction = auction;
      this.bidValue.setValue(auction.initial_value);
    }).catch((_) => {
      this.router.navigate(['login']);
    });
  }

  private getBids() {
    this.auctionService.getBids(this.id).then((bids) => {
      this.bids = bids.reverse();
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

  async bid() {
    if(this.bidValue.valid) {
      if(this.bidValue.value <= this.maxBid || this.bidValue.value < this.auction.initial_value) {
        alert("It's not possible to bid this value.");
        return;
      }
      try {
        await this.auctionService.createBid(this.id, +this.bidValue.value)
        this.getBids();
      } catch (error) {
        this.router.navigate(['login']);   
      }
    }
  }
  
  get maxBid(): number {
      let maxValue = 0;
      for (let index = 0; index < this.bids.length; index++) {
        if(this.bids[index].value > maxValue) {
          maxValue = this.bids[index].value;
        }        
      }
      return maxValue;
  }

}
