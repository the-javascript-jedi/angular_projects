import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { SpeedBumpModalComponent } from '../speed-bump-modal/speed-bump-modal.component';
import { filter, take } from 'rxjs/operators';
import { Location } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeedBumpService {
  private excludedRoutes = [
    '/test-connection',
    '/test-activation',
    '/restart',
    '/post-activation',
    '/setup-success',
    '/test-summary',
    '/test-third-page'
  ];

  private initialized = false;
  private currentUrl = '';
  private allowNavigation = false;
  private isProcessingBackButton = false;
  private stopProcessesCallback: (() => void) | null = null;
  private pendingNavigation: string | null = null;
  
  // Observable to track if speed bump should be shown
  private shouldShowSpeedBump = new BehaviorSubject<boolean>(false);
  public shouldShowSpeedBump$ = this.shouldShowSpeedBump.asObservable();

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private location: Location
  ) {
    this.currentUrl = this.router.url;
  }

  initBackButtonInterceptor(stopProcessesCallback: () => void): void {
    if (this.initialized) return;
    this.initialized = true;
    this.stopProcessesCallback = stopProcessesCallback;

    // Intercept navigation start to prevent unwanted navigation
    this.router.events
      .pipe(filter((event): event is NavigationStart => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        // If this is a back navigation and we're not allowing it
        if (event.navigationTrigger === 'popstate' && 
            !this.allowNavigation && 
            !this.excludedRoutes.includes(this.currentUrl) &&
            !this.isProcessingBackButton) {
          
          // Cancel the navigation
          this.router.navigateByUrl(this.currentUrl, { skipLocationChange: true });
          
          // Store where they wanted to go
          this.pendingNavigation = event.url;
          
          // Show speed bump
          this.showSpeedBumpModal();
        }
      });

    // Track successful navigation to update current URL
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (!this.isProcessingBackButton) {
          this.currentUrl = event.url;
          this.shouldShowSpeedBump.next(!this.excludedRoutes.includes(event.url));
        }
      });

    // Set up additional popstate handling as backup
    this.setupBackButtonHandling();
  }

  private setupBackButtonHandling(): void {
    // Listen for popstate events as a backup measure
    window.addEventListener('popstate', this.handlePopState.bind(this));
  }

  private handlePopState = (event: PopStateEvent): void => {
    if (this.allowNavigation || this.isProcessingBackButton) {
      return;
    }

    // Check if current route should show speed bump
    if (this.excludedRoutes.includes(this.currentUrl)) {
      return;
    }

    // This is a backup - the main logic should be handled by NavigationStart
    // Ensure we stay on the current page
    this.location.go(this.currentUrl);
  };

  private showSpeedBumpModal(): void {
    if (this.isProcessingBackButton) {
      return;
    }

    this.isProcessingBackButton = true;

    // Close any existing dialogs
    this.dialog.closeAll();

    const dialogRef = this.dialog.open(SpeedBumpModalComponent, {
      disableClose: true,
      width: '400px',
      panelClass: 'speed-bump-dialog',
      autoFocus: true,
      hasBackdrop: true,
      backdropClass: 'speed-bump-backdrop'
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      this.isProcessingBackButton = false;

      if (result === true) {
        // User confirmed exit
        this.handleUserConfirmedExit();
      } else {
        // User cancelled - clear pending navigation
        this.pendingNavigation = null;
        this.handleUserCancelledExit();
      }
    });
  }

  private handleUserConfirmedExit(): void {
    if (this.stopProcessesCallback) {
      this.stopProcessesCallback();
    }

    // Allow navigation and go to test summary or pending navigation
    this.allowNavigation = true;
    const targetRoute = '/test-summary'; // or this.pendingNavigation if you want to honor the original destination
    
    this.router.navigate([targetRoute]).finally(() => {
      this.pendingNavigation = null;
      // Small delay before re-enabling the interceptor
      setTimeout(() => {
        this.allowNavigation = false;
      }, 500);
    });
  }

  private handleUserCancelledExit(): void {
    // Ensure we stay on current URL
    this.location.go(this.currentUrl);
    
    // Make sure the router is in sync
    if (this.router.url !== this.currentUrl) {
      this.router.navigateByUrl(this.currentUrl, { skipLocationChange: true });
    }
  }

  // Public method to check if navigation should be allowed
  public canNavigate(): boolean {
    return this.allowNavigation || this.excludedRoutes.includes(this.currentUrl);
  }

  // Method to programmatically trigger navigation without speed bump
  public navigateWithoutSpeedBump(route: string | string[]): Promise<boolean> {
    this.allowNavigation = true;
    const navigationPromise = Array.isArray(route) 
      ? this.router.navigate(route)
      : this.router.navigateByUrl(route);
    
    return navigationPromise.finally(() => {
      setTimeout(() => {
        this.allowNavigation = false;
      }, 100);
    });
  }

  // Cleanup method
  public destroy(): void {
    this.initialized = false;
    this.allowNavigation = true;
    this.pendingNavigation = null;
    window.removeEventListener('popstate', this.handlePopState);
  }

  // Method to temporarily disable the interceptor
  public temporarilyDisableInterceptor(): void {
    this.allowNavigation = true;
    setTimeout(() => {
      this.allowNavigation = false;
    }, 100);
  }

  // Method to permanently disable the interceptor
  public disableInterceptor(): void {
    this.destroy();
  }

  // Route management methods
  public addExcludedRoute(route: string): void {
    if (!this.excludedRoutes.includes(route)) {
      this.excludedRoutes.push(route);
    }
    this.shouldShowSpeedBump.next(!this.excludedRoutes.includes(this.currentUrl));
  }

  public removeExcludedRoute(route: string): void {
    const index = this.excludedRoutes.indexOf(route);
    if (index > -1) {
      this.excludedRoutes.splice(index, 1);
    }
    this.shouldShowSpeedBump.next(!this.excludedRoutes.includes(this.currentUrl));
  }

  public isCurrentRouteExcluded(): boolean {
    return this.excludedRoutes.includes(this.currentUrl);
  }

  public getCurrentUrl(): string {
    return this.currentUrl;
  }
}