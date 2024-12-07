import { Injectable } from '@angular/core';
import { fromEvent, merge, Observable, Subject, timer, BehaviorSubject } from 'rxjs';
import { debounceTime, tap, takeUntil, repeat, map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IdleTimerService {
  private resetTimer$ = new Subject<void>();
  private idleTime = 20000; // 20 seconds (total session timer)
  private showPopupThreshold = 10; // Show popup 10 seconds before timeout
  private remainingTime$ = new BehaviorSubject<number>(this.idleTime / 1000); // Track remaining time in seconds
  private idleState$ = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.monitorUserActivity();
  }

  private monitorUserActivity(): void {
    const activityEvents = merge(
      fromEvent(document, 'mousemove'),
      fromEvent(document, 'click'),
      fromEvent(document, 'keydown')
    );

    activityEvents
      .pipe(
        debounceTime(500),
        tap(() => {
          console.log('[IdleTimerService] User activity detected, resetting timer.');
          this.resetTimer();
        })
      )
      .subscribe();
  }

  startIdleTimer(): void {
    console.log('[IdleTimerService] Idle timer started.');

    timer(0, 1000) // Emit every second
      .pipe(
        takeUntil(this.resetTimer$), // Stop timer on reset
         // Calculate remaining time in seconds/Convert time to seconds
        map((elapsedSeconds) => this.idleTime / 1000 - elapsedSeconds),
        tap((remainingTime) => {
          if (remainingTime <= 0) {
            this.idleState$.next(true); // Notify idle timeout
            this.remainingTime$.next(0); // Set remaining time to 0
            // this.router.navigate(['/home']); // Route to home page
          } else {
            this.remainingTime$.next(remainingTime); // Update remaining time
            if (remainingTime <= this.showPopupThreshold) {
              this.idleState$.next(true); // Show popup 10 seconds before timeout
            }
          }
        }),
        repeat() // Restart timer after reset
      )
      .subscribe();
  }

  getIdleState(): Observable<boolean> {
    return this.idleState$.asObservable();
  }

  getRemainingTime(): Observable<number> {
    return this.remainingTime$.asObservable();
  }

  resetTimer(): void {
    console.log('[IdleTimerService] Timer manually reset.');
    this.resetTimer$.next();
    this.remainingTime$.next(this.idleTime / 1000); // Reset remaining time to full duration
    this.idleState$.next(false); // Reset idle state
  }
}