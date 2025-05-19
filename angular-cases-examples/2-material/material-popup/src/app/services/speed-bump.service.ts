import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpeedBumpModalComponent } from '../speed-bump-modal/speed-bump-modal.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SpeedBumpService {

  constructor() { }

  private dialog = inject(MatDialog);
  private router = inject(Router);
  private location = inject(Location);

  private excludedRoutes = [
    '/connection',
    '/activation',
    '/restart',
    '/post-activation',
    '/setup-success'
  ];

  private initialized = false;

  initBackButtonInterceptor(stopProcessesCallback: () => void) {
    if (this.initialized) return;
    this.initialized = true;

    history.pushState(null, '', window.location.href);

    this.location.subscribe(() => {
      const currentUrl = this.router.url;

      if (this.excludedRoutes.includes(currentUrl)) {
        history.back();
        return;
      }

      const dialogRef = this.dialog.open(SpeedBumpModalComponent, {
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(userConfirmed => {
        if (userConfirmed) {
          stopProcessesCallback();
          this.router.navigate(['/account-summary']);
        } else {
          history.pushState(null, '', this.router.url);
        }
      });
    });
  }
}
