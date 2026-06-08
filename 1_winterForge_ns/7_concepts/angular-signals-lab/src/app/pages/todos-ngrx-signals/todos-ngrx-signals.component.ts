import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo, TodoState } from '../../store/todo.state';
import { Observable } from 'rxjs';
import { selectTodos } from '../../store/todo.selectors';
import { AsyncPipe, CommonModule } from '@angular/common';
import * as todoActions from '../../store/todo.actions';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-todos-ngrx-signals',
  imports: [FormsModule, AsyncPipe, CommonModule],
  templateUrl: './todos-ngrx-signals.component.html',
  styleUrl: './todos-ngrx-signals.component.scss',
})
export class TodosNgrxSignalsComponent {
  newTodo: string = '';
  // todo$: Observable<Todo[]>;
  store = inject(Store);

  // constructor(private store: Store) {
  // this.todo$ = this.store.select(selectTodos);
  // }

  todosSignal = toSignal(this.store.select(selectTodos), { initialValue: [] });

  // computed() creates a reactive value derived from one or more signals.
  // It automatically recalculates whenever any of its dependent signals change.
  completedCount = computed(() => {
    return this.todosSignal()?.filter((todo) => todo.completed).length;
  });

  addTodo() {
    console.log('todo', this.newTodo);
    this.store.dispatch(todoActions.addTodo({ text: this.newTodo }));
  }

  toggleTodo(todoId: number) {
    console.log('toggle - todoId', todoId);
    this.store.dispatch(todoActions.toggleTodo({ id: todoId }));
  }

  deleteTodo(todoId: number) {
    console.log('delete - todoId', todoId);
    this.store.dispatch(todoActions.deleteTodo({ id: todoId }));
  }
}
