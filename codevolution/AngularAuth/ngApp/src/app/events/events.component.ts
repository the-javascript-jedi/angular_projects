import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  
  events=[];
  constructor(private _eventService:EventService) { }

  ngOnInit(): void {
    this._eventService.getEvents().subscribe({
      next:(response)=>{
        this.events=response;
        console.log("this.events",this.events);
      },
      error:(error)=>{
        console.log("error-getEvents",error);
      }
    })
  }

}
