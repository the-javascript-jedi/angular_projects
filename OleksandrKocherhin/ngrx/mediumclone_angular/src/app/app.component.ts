import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import { TopBarComponent } from './shared/components/top-bar/top-bar.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet,TopBarComponent],
})
export class AppComponent {}
