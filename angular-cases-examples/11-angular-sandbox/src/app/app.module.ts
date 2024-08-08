import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlternatingRowsComponent } from './alternating-rows/alternating-rows.component';
import { ChessBoardChatgptComponent } from './chess-board-chatgpt/chess-board-chatgpt.component';
import { ChessBoardNsComponent } from './chess-board-ns/chess-board-ns.component';

@NgModule({
  declarations: [
    AppComponent,
    AlternatingRowsComponent,
    ChessBoardChatgptComponent,
    ChessBoardNsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
