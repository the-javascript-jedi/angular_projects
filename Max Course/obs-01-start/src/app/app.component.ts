import { Component, OnInit ,OnDestroy} from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  // initialize the data as false
  userActivated=false;
  // initialize a subscription
  private activatedSub:Subscription;
  constructor(private userService:UserService) {}
  ngOnInit() {
    // subscribe to the event emitter
    this.activatedSub=this.userService.activatedEmitter.subscribe(didActivate=>{
      this.userActivated=didActivate;
    })
  }
  ngOnDestroy(): void {
    // unsubscribe from the observable
    this.activatedSub.unsubscribe();
  }
}
