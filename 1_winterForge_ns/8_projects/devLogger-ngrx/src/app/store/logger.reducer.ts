import { createReducer, on } from '@ngrx/store';
import { initialState } from './logger.store';
import * as LogActions from './logger.action';

export const logsReducer = createReducer(
  initialState,

  on(LogActions.addLog, (state, { log }) => ({
    ...state,
    logs: [...state.logs, log],
  })),

  on(LogActions.deleteLog, (state, { id }) => ({
    ...state,
    logs: state.logs.filter((val) => val.id !== id),
  })),
);
