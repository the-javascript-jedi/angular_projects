import { createAction, props } from '@ngrx/store';
import { Log } from '../models/log';

export const addLog = createAction('[Logs] Add Log', props<{ log: Log }>());

export const deleteLog = createAction('[Logs] Delete Log', props<{ id: string }>());

export const selectAllLogs = createAction('[Logs] Select All Logs', props<{ log: Log }>());
