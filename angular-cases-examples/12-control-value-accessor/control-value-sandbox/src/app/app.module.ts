import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ControlValueAccessorDirective } from './control-value-accessor.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorsComponent } from './validation-errors/validation-errors.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ControlValueAccessorDirective,
    ValidationErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
