import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomNestedFormComponent } from './custom-nested-form/custom-nested-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NestedFormComponent,
    CustomNestedFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
