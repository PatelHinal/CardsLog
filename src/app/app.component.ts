import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cardAPI';

  constructor(private router:Router){}
  cdatas=[];
  c2data=[];
  getData = function(Card1Data){
    //console.log(Card1Data);
    this.cdatas.push(Card1Data);
  }

  getCatData = function(Card2Data){
  //  console.log(Card2Data);
    this.c2data.push(Card2Data);
  }
  
  

  }

