import { createFeatureSelector, createSelector } from '@ngrx/store';
import { logsState } from './logger.store';

export const selectLogsState = createFeatureSelector<logsState>('logs');

export const selectAllLogs = createSelector(selectLogsState, (state) => state.logs);

export const selectCurrentLog = createSelector(selectLogsState, (state) => state.selectedLog);
