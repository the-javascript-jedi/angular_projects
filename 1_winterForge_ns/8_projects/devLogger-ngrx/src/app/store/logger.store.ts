import { Log } from '../models/log';

export interface logsState {
  logs: Log[];
  selectedLog: null | Log;
}

export const initialState: logsState = {
  logs: [
    { id: '1', text: 'generated components', date: new Date('12/26/2017 12:54:23') },
    { id: '2', text: 'added bootstrap', date: new Date('12/27/2017 12:54:23') },
    { id: '3', text: 'added logs  components', date: new Date('12/28/2017 12:54:23') },
  ],
  selectedLog: null,
};
