import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[Todo] Add Todo',

  props<{ text: string }>(),
);

export const toggleTodo = createAction(
  '[Todo] Toggle Todo',

  props<{ id: number }>(),
);

export const deleteTodo = createAction(
  '[Todo] Delete Todo',

  props<{ id: number }>(),
);
