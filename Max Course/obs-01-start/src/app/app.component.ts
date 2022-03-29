import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // initialize the data as false
  userActivated=false;
  constructor(private userService:UserService) {}
  ngOnInit() {
    // subscribe to the event emitter
    this.userService.activatedEmitter.subscribe(didActivate=>{
      this.userActivated=didActivate;
    })
  }
}
