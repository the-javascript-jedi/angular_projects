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
  errorsMessages$:Observable<string[]>;
  // make service public so it is reachable by template
  constructor(public messagesService:MessagesService) { 
    console.log("Created Messages Component");
   }
  ngOnInit() {
    this.errorsMessages$=this.messagesService.errors$.pipe(
      tap(()=>{
        console.log("this.showMessages",this.showMessages);
        return this.showMessages=true;
      })
      )
      this.showMessages=true
   }
  onClose() { 
    this.showMessages=false;
  }
}