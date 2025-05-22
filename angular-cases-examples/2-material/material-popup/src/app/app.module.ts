import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { SpeedBumpModalComponent } from './speed-bump-modal/speed-bump-modal.component';
import { TestInstallComponent } from './pages/test-install/test-install.component';
import { TestConnectionComponent } from './pages/test-connection/test-connection.component';
import { TestActivationComponent } from './pages/test-activation/test-activation.component';
import { TestAccountSummaryComponent } from './pages/test-account-summary/test-account-summary.component';
import { TestSecondPageComponent } from './pages/test-second-page/test-second-page.component';
import { TestThirdPageComponent } from './pages/test-third-page/test-third-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleDialogComponent,
    SpeedBumpModalComponent,
    TestInstallComponent,
    TestConnectionComponent,
    TestActivationComponent,
    TestAccountSummaryComponent,
    TestSecondPageComponent,
    TestThirdPageComponent
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
