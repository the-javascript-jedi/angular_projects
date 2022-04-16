import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Message} from '../model/message';
import {tap} from 'rxjs/operators';
import { MessagesService } from './messages.service';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  showMessages=false;
  error$:Observable<string[]>;
  constructor(public messagesService:MessagesService) {  }
  ngOnInit() { 
    // set the local error observable to the service error observable
    this.error$=this.messagesService.error$.pipe(
      tap((val)=>{
        console.log("val",val);
        if(val.length>0){
          this.showMessages=true
        }
      })
    )
   }
  onClose() { 
    this.showMessages=false;
  }
}
