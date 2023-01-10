import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import AppComponent
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

// We need to register  the component with our module, we can register components by adding an array to the decorator called declarations.
// By registering the component, Angular will allow us to use the components the browser will be able to understand how to render the component.
@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  // to use pipes BrowserModule needs to be registered
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
