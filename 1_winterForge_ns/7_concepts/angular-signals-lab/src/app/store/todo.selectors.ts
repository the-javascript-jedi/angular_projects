import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TodoState } from './todo.state';

export const selectTodoState = createFeatureSelector<TodoState>('todo');

export const selectTodos = createSelector(
  selectTodoState,

  (state) => state.todos,
);
