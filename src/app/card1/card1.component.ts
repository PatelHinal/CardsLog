import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { Http, Response } from '@angular/http';
import { HandleData } from "../handledata.service";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {
  data:{
    id:"",
    type:"",
    links:"" }
attributes:{
    createdAt:"",
    updatedAt:"",
    slug:"",
    synopsis:""
}

@Output() onCard1Data = new EventEmitter();
receivedData1;
kid=0;
ktype=0;
klink=0;
kabbreviate=0;
kagerating=0;
kcoverimage=0;
kimgoffset=0;
kcdim=0;
  Kitsu =[];
  
   constructor(private http:Http, private router: Router, private routes:ActivatedRoute) { 
    console.log(routes);
   http.get('https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0').subscribe
   ((data:Response) =>
      {
        console.log(data);
        this.receivedData1 = data.json();
        console.log(this.receivedData1);
        this.kid=this.receivedData1.data[0].id;
        this.ktype= this.receivedData1.data[0].type;
       this.klink = this.receivedData1.data[0].links.self;
       this.kabbreviate = this.receivedData1.data[0].attributes.abbreviatedTitles;
       this.kagerating = this.receivedData1.data[0].attributes.ageRating;
       this.kcoverimage = this.receivedData1.data[0].attributes.coverImage.tiny;
       this.kcdim = this.receivedData1.data[0].attributes.coverImage.meta.dimensions.tiny.width;
       this.kimgoffset = this.receivedData1.data[0].attributes.coverImageTopOffset;



      },
    err=>console.log(err))
    }
    cards:{id:number};
 
   getCard1 = function(){
    let data={
      id:this.id,
      type:this.type,
      links:this.links,
     
    }
    this.onCard1Data.emit(data);

     
  }


  getSuccessData= () =>
  {
    var newID = 11;
    this.router.navigate(["/card1",newID,"anime","https://kitsu.io/api/edge/anime/11","Initial D 4th Stage","81.02","https://media.kitsu.io/anime/poster_images/9/tiny.jpg?1438856488","100"]);
  }
  ngOnInit() {
    this.cards= {id:this.routes.snapshot.params.id};
  }

}
