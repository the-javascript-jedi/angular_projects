import { Injectable } from '@angular/core';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Log[] = [];

  constructor() {
    this.logs = [
      { id: '1', text: 'generated components', date: new Date('12/26/2017 12:54:23') },
      { id: '2', text: 'added bootstrap', date: new Date('12/27/2017 12:54:23') },
      { id: '1', text: 'added logs  components', date: new Date('12/28/2017 12:54:23') },
    ];
  }

  getLogs() {
    return this.logs;
  }
}
