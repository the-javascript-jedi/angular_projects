import { Component } from '@angular/core';
import { TodoComponent } from './pages/todo/todo.component';
import { TodosNgrxComponent } from './pages/todos-ngrx/todos-ngrx.component';
import { TodosNgrxSignalsComponent } from './pages/todos-ngrx-signals/todos-ngrx-signals.component';

@Component({
  selector: 'app-root',
  imports: [TodoComponent, TodosNgrxComponent, TodosNgrxSignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'angular-signals-lab';
}
