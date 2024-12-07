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
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { ParentComponentComponent } from './component-communication/parent-component/parent-component.component';
import { ChildComponentComponent } from './component-communication/parent-component/child-component/child-component.component';
import { FormsModule } from '@angular/forms';
import { ClickToggleDirective } from '../directives/click-toggle.directive';
import { IdlePopupComponent } from './idle-popup/idle-popup.component';

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
    FormReactiveComponent,
    ComponentCommunicationComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    ClickToggleDirective,
    IdlePopupComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
