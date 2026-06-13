import { createAction, props } from '@ngrx/store';
import { Log } from '../models/log';

export const addLog = createAction('[Logs] Add Log', props<{ log: Log }>());

export const deleteLog = createAction('[Logs] Delete Log', props<{ id: string }>());

export const updateLog = createAction('[Logs] Update Log', props<{ log: Log }>());

export const selectLog = createAction('[Logs] Select Log', props<{ log: Log | null }>());
