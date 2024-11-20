import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import { TopBarComponent } from './shared/components/top-bar/top-bar.component'
import { Store } from '@ngrx/store'
import { authActions } from './auth/store/actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet,TopBarComponent],
})
export class AppComponent {
  constructor(private store:Store){}

  ngOnInit(){
    // make request on page load and store data in state
    this.store.dispatch(authActions.getCurrentUser());
  }
}
