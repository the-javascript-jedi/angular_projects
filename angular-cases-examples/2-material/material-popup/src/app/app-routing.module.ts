import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestInstallComponent } from './pages/test-install/test-install.component';
import { TestConnectionComponent } from './pages/test-connection/test-connection.component';
import { TestActivationComponent } from './pages/test-activation/test-activation.component';
import { TestAccountSummaryComponent } from './pages/test-account-summary/test-account-summary.component';
import { TestSecondPageComponent } from './pages/test-second-page/test-second-page.component';
import { TestThirdPageComponent } from './pages/test-third-page/test-third-page.component';
import { SpeedBumpGuard } from './guards/speed-bump.guard';

const routes: Routes = [
  // Routes that should trigger speed bump when user tries to navigate away
  { 
    path: 'test-install', 
    component: TestInstallComponent,
    canDeactivate: [SpeedBumpGuard]
  },
  { 
    path: 'test-connection', 
    component: TestConnectionComponent,
    canDeactivate: [SpeedBumpGuard]
  },
  { 
    path: 'test-activation', 
    component: TestActivationComponent,
    canDeactivate: [SpeedBumpGuard]
  },
  { 
    path: 'test-second-page', 
    component: TestSecondPageComponent,
    canDeactivate: [SpeedBumpGuard]
  },
  
  // Routes that should NOT trigger speed bump (these are in your excludedRoutes)
  { 
    path: 'test-summary', 
    component: TestAccountSummaryComponent 
    // No canDeactivate guard here
  },
  { 
    path: 'test-third-page', 
    component: TestThirdPageComponent 
    // No canDeactivate guard here (since it's in excludedRoutes)
  },
  
  // Default and fallback routes
  { path: '', redirectTo: '/test-connection', pathMatch: 'full' },
  { path: '**', redirectTo: '/test-connection' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Optional: Enable tracing for debugging navigation issues
    enableTracing: false,
    // Optional: Configure how router handles same URL navigation
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}