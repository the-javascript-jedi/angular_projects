import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { SpeedBumpModalComponent } from './speed-bump-modal/speed-bump-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleDialogComponent,
    SpeedBumpModalComponent
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
