import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectTodos } from '../../store/todo.selectors';
import { Observable } from 'rxjs';
import * as TodoActions from '../../store/todo.actions';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos-ngrx',
  imports: [CommonModule, FormsModule],
  templateUrl: './todos-ngrx.component.html',
  styleUrl: './todos-ngrx.component.scss',
  standalone: true,
})
export class TodosNgrxComponent {
  todos$: Observable<Todo[]>;
  newTodo = '';

  constructor(private store: Store) {
    this.todos$ = this.store.select(selectTodos);
  }

  addTodo() {
    const text = this.newTodo.trim();
    console.log('Adding todo:', text);
    if (!text) return;
    this.store.dispatch(TodoActions.addTodo({ text }));
    this.newTodo = '';
  }

  toggleTodo(id: number) {
    console.log('Toggling todo with id:', id);
    this.store.dispatch(TodoActions.toggleTodo({ id }));
  }

  deleteTodo(id: number) {
    this.store.dispatch(TodoActions.deleteTodo({ id }));
  }
}
