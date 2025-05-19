import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestInstallComponent } from './pages/test-install/test-install.component';
import { TestConnectionComponent } from './pages/test-connection/test-connection.component';
import { TestActivationComponent } from './pages/test-activation/test-activation.component';
import { TestAccountSummaryComponent } from './pages/test-account-summary/test-account-summary.component';

const routes: Routes = [
  { path: 'test-install', component: TestInstallComponent },
  { path: 'test-connection', component: TestConnectionComponent },
  { path: 'test-activation', component: TestActivationComponent },
  { path: 'test-summary', component: TestAccountSummaryComponent },
  { path: '', redirectTo: '/test-install', pathMatch: 'full' }, // default route
  { path: '**', redirectTo: '/test-install' } // fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

