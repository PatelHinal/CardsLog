import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';
//import {Observable} from 'rxjs/Observable';
//import 'rxjs/add/operator/map';

@Injectable()

export class HandleData{
    
    constructor(private httpclient:HttpClient){}
    data={
        id:"",
        type:"",
        links:"" }
    attributes:{
        createdAt:"",
        updatedAt:"",
        slug:"",
        synopsis:""
    }
    all={
        _id:"",
        text:"",
       user: "",
    }
    upvotes={
        user:""
    }
   
    getCard1Data(){
        console.log("from Kitsu");
          return this.httpclient.get("https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0");
 
      }

    getCard2Data(){
        console.log("From Cat-Heroku");
        return this.httpclient.get("https://cat-fact.herokuapp.com/facts");
    }
  
    
    
    }