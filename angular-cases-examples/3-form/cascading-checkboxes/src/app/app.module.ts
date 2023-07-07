import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CascadingCheckboxComponent } from './cascading-checkbox/cascading-checkbox.component';
import { CheckboxSelectionRmComponent } from './checkbox-selection-rm/checkbox-selection-rm.component';

@NgModule({
  declarations: [
    AppComponent,
    CascadingCheckboxComponent,
    CheckboxSelectionRmComponent
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
