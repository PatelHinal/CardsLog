import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import {HandleData } from './handledata.service';
import { HttpClientModule } from '@angular/common/http';
import { CardLinkDirective } from './card-link.directive';
import { HttpModule } from '@angular/http';
  
const myAppRoutes:Routes =[
    {path:"",component:IndexComponent},
    {path:"card1",component:Card1Component},
    {path:"card1/:id/:text/:link/:Abbreviated/:AverageRating/:CoverImage/:ciOffset",component:Card1Component},
    {path:"card2",component:Card2Component}]
@NgModule({
  declarations: [
    AppComponent,
    Card1Component,
    Card2Component,
    IndexComponent,
    CardLinkDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myAppRoutes),
    HttpModule

  ],
  providers: [HandleData],
  bootstrap: [AppComponent]
})
export class AppModule { }
