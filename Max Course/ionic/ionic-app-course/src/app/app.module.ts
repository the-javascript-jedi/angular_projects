import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {
  RouteReuseStrategy,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    IonicModule.forRoot(),
    IonicModule,
    RouterLink,
    RouterLinkActive,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
