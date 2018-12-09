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
}
