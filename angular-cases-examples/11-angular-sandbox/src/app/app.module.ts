import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlternatingRowsComponent } from './alternating-rows/alternating-rows.component';
import { ChessBoardChatgptComponent } from './chess-board-chatgpt/chess-board-chatgpt.component';
import { ChessBoardNsComponent } from './chess-board-ns/chess-board-ns.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { PhoneFormatterDirective } from '../directives/phone-formatter.directive';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AlternatingRowsComponent,
    ChessBoardChatgptComponent,
    ChessBoardNsComponent,
    CustomDirectiveComponent,
    HighlightDirective,
    PhoneFormatterDirective,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
