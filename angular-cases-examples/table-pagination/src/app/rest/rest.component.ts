import { Component, OnInit } from '@angular/core';
import { Users } from 'src/models/Users';
import { RestService } from 'src/services/rest.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit {
  users:Users[]=[];
  firstName:any;
  key:string='id';
  reverse:boolean=false;
  p:number=1;

  constructor(private rs:RestService){

  }

  ngOnInit(): void {
    this.rs.getUsers().subscribe((response)=>{
      this.users=response;
    })
  }

  Search(){
    if(this.firstName==''){
      this.ngOnInit();
    }else{
      this.users=this.users.filter(res=>{
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
  }

  sort(key){
    this.key=key;
    this.reverse=!this.reverse;
  }
}
