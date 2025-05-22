import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { SpeedBumpService } from '../services/speed-bump.service';

// Interface that components can implement if they want custom deactivation logic
export interface CanComponentDeactivate {
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}

// Functional guard approach (recommended in Angular 15+)
export const SpeedBumpGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  const speedBumpService = inject(SpeedBumpService);
  
  // If navigation is already allowed by the service, let it proceed
  if (speedBumpService.canNavigate()) {
    return true;
  }
  
  // If the component implements canDeactivate, ask it first
  if (component && component.canDeactivate) {
    return component.canDeactivate();
  }
  
  // Default behavior: allow navigation
  // The actual speed bump logic is handled by the service's popstate listener
  return true;
};