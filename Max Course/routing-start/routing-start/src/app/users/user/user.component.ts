import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    // this command runs on page load
    this.user={
      id:this.route.snapshot.params["id"],
      name:this.route.snapshot.params["name"],
    }
    // observable always listend to the route params for changes
    this.route.params.subscribe((params:Params)=>{
      this.user.id=params["id"];
      this.user.name=params["name"];
    })
  }

}