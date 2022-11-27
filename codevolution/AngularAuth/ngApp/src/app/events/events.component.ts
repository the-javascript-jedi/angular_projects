import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  
  events=[];
  constructor(private _eventService:EventService,private _router:Router) { }

  ngOnInit(): void {
    this._eventService.getEvents().subscribe({
      next:(response)=>{
        this.events=response;
        console.log("this.events",this.events);
      },
      error:(error)=>{
        console.log("error-getEvents",error);
        this._router.navigate(['/login']);
        if(error instanceof HttpErrorResponse){
          console.log("error instanceof HttpErrorResponse")
          if(error.status){
          }
        }
      }
    })
  }

}
