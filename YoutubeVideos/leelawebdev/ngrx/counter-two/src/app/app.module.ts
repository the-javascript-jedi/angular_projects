import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CustomCounterInputComponent } from './counter/custom-counter-input/custom-counter-input.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CounterComponent,
    CustomCounterInputComponent,
    HomeComponent,
    HeaderComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({counter:counterReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly:environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
