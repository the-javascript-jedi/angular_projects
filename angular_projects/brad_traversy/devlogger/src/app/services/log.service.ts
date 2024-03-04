import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs:{
      id:string,
      text:string,
      date:any
  }[]
  constructor() {
     this.logs=[
          {id:'1',text:"Generated components",date: new Date()},
          {id:'2',text:"Added Bootstrap",date: new Date()},
          {id:'3',text:"Added logs components",date: new Date()}
    ]
   }

   getLogs(){
    return this.logs;
   }
}
