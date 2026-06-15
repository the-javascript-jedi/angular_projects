import { createReducer, on } from '@ngrx/store';
import { initialState } from './logger.store';
import * as LogActions from './logger.action';

export const logsReducer = createReducer(
  initialState,

  on(LogActions.addLog, (state, { log }) => ({
    ...state,
    selectedLog: null,
    logs: [...state.logs, log],
  })),

  on(LogActions.deleteLog, (state, { id }) => ({
    ...state,
    selectedLog: null,
    logs: state.logs.filter((val) => val.id !== id),
  })),

  on(LogActions.updateLog, (state, { log }) => ({
    ...state,
    logs: state.logs.map((l) => (l.id === log.id ? log : l)),
    selectedLog: null,
  })),

  on(LogActions.selectLog, (state, { log }) => ({
    ...state,
    selectedLog: log,
  })),
);
