import { Injectable } from '@angular/core';
import { LoginService } from './app/login.service';
import { HttpClient } from '@angular/common/http';
import { Auction, Bid } from './entity';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private loginService: LoginService, private http: HttpClient, private router: Router) { }

  public listRecords(): Promise<Auction[]> {
    return new Promise<Auction[]>((resolve, reject) => {
      if (this.loginService.isAuthenticated) {
        this.http.get("/backend/api/auctions/?format=json", {
          headers: {
            'Authorization': `Token ${this.loginService.token}`
          }
        }).subscribe((data) => {
          resolve(data as Auction[]);
        }, (error) => reject(error));
      }
      else {
        this.router.navigate(["login"]);
        resolve(null);
      }
    });
  }

  public getRecord(id: number): Promise<Auction> {
    return new Promise<Auction>((resolve, reject) => {
      if (this.loginService.isAuthenticated) {
        this.http.get(`/backend/api/auctions/${id}/?format.json`, {
          headers: {
            'Authorization': `Token ${this.loginService.token}`
          }
        }).subscribe((data) => {
          resolve(data as Auction);
        }, (error) => reject(error));
      }
      else {
        this.router.navigate(["login"]);
        resolve(null);
      }
    });
  }

  public endAuction(auction: Auction): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (this.loginService.isAuthenticated) {
        const body = { ...auction };
        const now: Date = new Date();
        body.ending_date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
        this.http.put(`/backend/api/auctions/${auction.id}/?format=json`, body,
          {
            headers: {
              'Authorization': `Token ${this.loginService.token}`
            }
          }).subscribe((_) => resolve(true), (error) => reject(error));
      }
      else {
        this.router.navigate(["login"]);
        resolve(false);
      }
    });
  }

  public getBids(auctionId: number): Promise<Bid[]> {
    return new Promise<Bid[]>((resolve, reject) => {
      if (this.loginService.isAuthenticated) {
        this.http.get(`/backend/api/bids/?format=json&auction=${auctionId}`,
          {
            headers: {
              'Authorization': `Token ${this.loginService.token}`
            }
          }).subscribe((data) => resolve(data as Bid[]), (error) => reject(error));
      }
      else {
        resolve(null);
        this.router.navigate(["login"]);
      }
    });
  }

  public createBid(auctionId: number, value: number) {
    return new Promise<boolean>((resolve, reject) => {
      if (this.loginService.isAuthenticated) {
        this.http.post("/backend/api/bids/?format=json", {
          auction: auctionId,
          value: value
        },
          {
            headers: {
              'Authorization': `Token ${this.loginService.token}`
            }
          }).subscribe((_) => resolve(true), (_) => reject(false));
      }
      else {
        resolve(false);
        this.router.navigate(["login"]);
      }
    });
  }

  public createRecord(name: string, initialValue: number, isUsed: boolean): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (this.loginService.isAuthenticated) {
        this.http.post("/backend/api/auctions/?format=json", {
          name: name,
          initial_value: initialValue,
          is_used: isUsed
        },
          {
            headers: {
              'Authorization': `Token ${this.loginService.token}`
            }
          }).subscribe((_) => resolve(true), (_) => reject(false));
      }
      else {
        resolve(false);
        this.router.navigate(["login"]);
      }
    });
  }
}
