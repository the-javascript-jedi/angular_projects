import { Component } from '@angular/core';
import { IdleTimerService } from './services/idle-timer.service'
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   showPopup = false;
  remainingTime = 0;

  constructor(private idleTimerService: IdleTimerService) {}

  ngOnInit(): void {
    this.idleTimerService.startIdleTimer();

    // Show popup when the idle state is triggered
    this.idleTimerService.getIdleState().subscribe((isIdle) => {
      this.showPopup = isIdle;
    });

    // Update remaining time
    this.idleTimerService.getRemainingTime().subscribe((time) => {
      this.remainingTime = time;
    });
  }

  onClosePopup(): void {
    this.idleTimerService.resetTimer();
    this.showPopup = false; // Close the popup
  }
}
