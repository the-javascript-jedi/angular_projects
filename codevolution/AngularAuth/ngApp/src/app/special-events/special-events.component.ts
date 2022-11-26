import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss']
})
export class SpecialEventsComponent implements OnInit {
  specialEvents=[];
  constructor(private _eventService:EventService) { }

  ngOnInit(): void {
    this._eventService.getSpecialEvents().subscribe({
      next:(response)=>{
        this.specialEvents=response;
        console.log("this.specialEvents",this.specialEvents);
      },
      error:(error)=>{
        console.log("error-getEvents",error);
      }
    })
  }

}
