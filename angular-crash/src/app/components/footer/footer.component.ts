import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _router:Router) { }
  // public year:string="";
  d = new Date();
  year = this.d.getFullYear();
  ngOnInit(): void {
  }

  hasRoute(routeToCheck:string){
    // returns true if it matches the current route
    // if we are on any other route other than the passed routeToCheck it will return false
    //i.e Add button must be displayed only in the "/" route so it will return true when we are on the routeToCheck page
    console.log("this._router.url",this._router.url)
    console.log("routeToCheck",routeToCheck)
    return this._router.url===routeToCheck;
  }

}
