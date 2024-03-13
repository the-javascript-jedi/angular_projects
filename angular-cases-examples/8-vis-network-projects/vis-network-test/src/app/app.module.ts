import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { VisOneComponent } from './vis-one/vis-one.component';
import { VisManipulationComponent } from './vis-manipulation/vis-manipulation.component';
import { VisSaveLoadComponent } from './vis-save-load/vis-save-load.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VisOneComponent,
    VisManipulationComponent,
    VisSaveLoadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
