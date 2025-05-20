import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { SpeedBumpService } from '../services/speed-bump.service';

// Interface that components can implement if they want custom deactivation logic
export interface CanComponentDeactivate {
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SpeedBumpGuard implements CanDeactivate<CanComponentDeactivate> {

  constructor(private speedBumpService: SpeedBumpService) {}

  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: any,
    currentState: any,
    nextState: any
  ): Observable<boolean> | Promise<boolean> | boolean {
    
    // If navigation is already allowed by the service, let it proceed
    if (this.speedBumpService.canNavigate()) {
      return true;
    }

    // If the component implements canDeactivate, ask it first
    if (component && component.canDeactivate) {
      return component.canDeactivate();
    }

    // Default behavior: allow navigation
    // The actual speed bump logic is handled by the service's popstate listener
    return true;
  }
}