import { createReducer, on } from '@ngrx/store';

import * as TodoActions from './todo.actions';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [],
};

export const todoReducer = createReducer(
  initialState,

  on(TodoActions.addTodo, (state, { text }) => ({
    ...state,

    todos: [
      ...state.todos,

      {
        id: Date.now(),
        text,
        completed: false,
      },
    ],
  })),

  on(TodoActions.toggleTodo, (state, { id }) => ({
    ...state,

    todos: state.todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo,
    ),
  })),
  on(TodoActions.deleteTodo, (state, { id }) => ({
    ...state,

    todos: state.todos.filter((todo) => todo.id !== id),
  })),
);
