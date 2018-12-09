import { Injectable } from '@angular/core';
import { LoginService } from './app/login.service';
import { HttpClient } from '@angular/common/http';
import { Auction } from './entity';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private loginService: LoginService, private http: HttpClient, private router: Router) { }

  public listRecords() : Promise<Auction[]> {
    return new Promise<Auction[]>((resolve, reject) => {
      if(this.loginService.isAuthenticated) {
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
      }
    });
  }

  public getRecord(id: number) : Promise<Auction> {
    return new Promise<Auction>((resolve, reject) => {
      if(this.loginService.isAuthenticated) {
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
      }
    });
  }

  public endAuction(auction: Auction): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if(this.loginService.isAuthenticated) {
        const body = {...auction};
        const now: Date = new Date();
        body.ending_date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
        this.http.put(`/backend/api/auctions/${auction.id}/?format=json`, body,
        {
          headers: {
            'Authorization': `Token ${this.loginService.token}`
          }
        }).subscribe((_) => resolve(true), (_) => reject(false));
      }
      else {
        this.router.navigate(["login"]);
      }
    });
  }

  public createRecord(name: string, initialValue: number, isUsed: boolean) : Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if(this.loginService.isAuthenticated) {
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
        this.router.navigate(["login"]);
      }
    });
  }
}
