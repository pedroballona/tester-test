import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/entity';
import { AuctionService } from 'src/auction.service';

@Component({
  selector: 'app-list-auction',
  templateUrl: './list-auction.component.html',
  styleUrls: ['./list-auction.component.css']
})
export class ListAuctionComponent implements OnInit {
  auctions: Auction[];

  constructor(private auctionService : AuctionService) { }

  ngOnInit() {
    this.auctionService.listRecords().then((auctions) => {
      this.auctions = auctions;
    });
  }

}
