import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { ContentComponent } from './main/content/content.component';
import { NewAuctionComponent } from './main/auctions/new-auction/new-auction.component';
import { ListAuctionComponent } from './main/auctions/list-auction/list-auction.component';
import { DetailAuctionComponent } from './main/auctions/detail-auction/detail-auction.component';
import { BidListComponent } from './main/auctions/bid-list/bid-list.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'singup', component: SingUpComponent },
  { 
    path: 'main', 
    component: MainComponent, 
    children: [
      { path: 'newauction', component: NewAuctionComponent },
      { path: 'auctions', component: ListAuctionComponent },
      { path: 'auction/:id', component: DetailAuctionComponent },
    ] 
  },
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HeaderComponent,
    ContentComponent,
    NewAuctionComponent,
    ListAuctionComponent,
    DetailAuctionComponent,
    BidListComponent,
    SingUpComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
