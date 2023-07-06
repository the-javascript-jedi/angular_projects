import { Component } from '@angular/core';
import {UserServiceService} from '../../services/user-service.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  ngOnInit() {
    // Called after the constructor and called  after the first ngOnChanges() 
    this._UserServiceService.makeOuathApiCall("https://cdetsng.cisco.com/wsapi/latest/api/search?criteria=([Submitted-on] >= '01/01/2010') &fields=Severity,Status&count=10&start=99990").subscribe({
      next:(val)=>{
        console.log("val",val);
      },
      error:(error)=>{
        console.log("error",error);
      }
    })

    this._UserServiceService.makeOuathApiCall("https://cdetsng.cisco.com/wsapi/latest/api/bug/CSCwf44641").subscribe({
      next:(val)=>{
        console.log("val",val);
      },
      error:(error)=>{
        console.log("error",error);
      }
    })

  }

  constructor(private _UserServiceService:UserServiceService){}
}
