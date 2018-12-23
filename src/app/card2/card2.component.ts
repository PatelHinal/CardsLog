import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { HandleData } from "../handledata.service";
import { Http,Response } from '@angular/http';


@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {
  all={
    _id:"",
    text:"",
   user: "",
}
upvotes={
    user:""
}
receivedData;
@Output() onCard2Data = new EventEmitter();
catid=0;
cattext=0;
catuser=0;
catupvotes=0;
lname=0;
Cat=[];
  constructor(http:Http) { 
    http.get('https://cat-fact.herokuapp.com/facts').subscribe
    ((data:Response)=>
      {
       console.log(data);
        this.receivedData = data.json();
        console.log(this.receivedData);
        this.catid = this.receivedData.all[2]._id;
        this.cattext = this.receivedData.all[2].text;
        this.catuser= this.receivedData.all[2].user.name.first;
        this.lname= this.receivedData.all[2].user.name.last;
        this.catupvotes = this.receivedData.all[2].upvotes[0].user;
      
      },
    err=>console.log(err))
  }

  getCard2 = function(){
    let tdata={
      _id:this._id,
      text:this.text,
      user:this.user
    }
    this.onCard2Data.emit(tdata);
    
  }


  ngOnInit() {
  }

}
