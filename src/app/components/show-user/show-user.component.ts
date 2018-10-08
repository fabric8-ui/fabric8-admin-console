import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store.service';
import { SearchUserService } from "../../services/search-user.service";
import { log } from 'util';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  constructor(
    private store: DataStoreService,
    private searchuserservices:SearchUserService
  ) { }
  
  name:string[] = [];
  email:string[]=[];
  date:any[]=[];
  update="updated-at";
  sortByname()
  {

    this.searchuserservices.apiResult.subscribe(res => {
     let i=0;
     res.data.forEach(attributes => 
      {
        this.name[i]=res.data[i].attributes.username;
       i++;
     });
     console.log(res.data);
    });
    this.name.sort();
    for (let k = 0; k < this.name.length; k++) 
    {
      console.log(this.name[k]);
    }
    return this.name;
  } 
  byMail(){
    this.searchuserservices.apiResult.subscribe(res => {
      let i=0;
      res.data.forEach(attributes => 
       {
         this.email[i]=res.data[i].attributes.email;
        i++;
      });
    //  console.log(res.data);
     });
     this.email.sort();
     for (let k = 0; k < this.email.length; k++) 
     {
       console.log(this.email[k]);
     }
     return this.email;
  }

  byDate()
  {
    this.searchuserservices.apiResult.subscribe(res => 
      {
        
      let i=0;
      res.data.forEach(attributes => 
       {
         console.log("dating.."+res.data[i].attributes.update)
         this.date[i]=res.data[i].attributes.update;
        i++;
      });
     });
     this.date.sort();
     for (let k = 0; k < this.date.length; k++) 
     {
       console.log(this.date[k]);
     }
     return this.date;
  }
  

  ngOnInit() {
  }

}
