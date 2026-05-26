import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  newTodo = signal('');

  todos = signal<Todo[]>([
    {
      id: 1,
      text: 'Learn Angular Signals',
      completed: false,
    },
  ]);

  addTodo() {
    const text = this.newTodo().trim();

    if (!text) return;

    const newItem: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    // .set() directly replaces the signal value.
    //
    // Here newTodo is a signal storing
    // the current text input value.
    // After adding a todo successfully,
    // we reset the input field back to empty string.
    this.todos.update((todos) => [...todos, newItem]);

    this.newTodo.set('');
  }
  // update() is used when the new signal value
  // depends on the previous value.
  //
  // Angular gives the current todos array
  // as the parameter: (todos)
  toggleTodo(id: number) {
    this.todos.update((todos) =>
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      ),
    );
  }
  // computed() creates a reactive derived value.
  //
  // Whenever the todos signal changes,
  // Angular automatically reruns this function.
  completedCount = computed(() => {
    return this.todos().filter((todo) => todo.completed).length;
  });

  // update() is used when the new signal value
  // depends on the previous value.
  deleteTodo(id: number) {
    this.todos.update((todos) => todos.filter((todo) => todo.id !== id));
  }
}
//////////
