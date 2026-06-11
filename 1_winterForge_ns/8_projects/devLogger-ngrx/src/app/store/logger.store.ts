import { Log } from '../models/log';

export interface logsState {
  logs: Log[];
}

export const initialState: logsState = {
  logs: [],
};
