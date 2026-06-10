import { Injectable } from '@angular/core';
import { Log } from '../models/log';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Log[] = [];
  private logSource = new BehaviorSubject<Log>({ id: '', text: '', date: null });
  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      { id: '1', text: 'generated components', date: new Date('12/26/2017 12:54:23') },
      { id: '2', text: 'added bootstrap', date: new Date('12/27/2017 12:54:23') },
      { id: '3', text: 'added logs  components', date: new Date('12/28/2017 12:54:23') },
    ];
  }

  getLogs(): Observable<Log[]> {
    if (localStorage.getItem('logs') === null) {
      this.logs = [];
    } else {
      this.logs = JSON.parse(localStorage.getItem('logs')!);
    }
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }
  updateLog(log: Log) {
    console.log('log', log);
    const logIndexToUpdate = this.logs.findIndex((l) => l.id === log.id);
    /* code to modify exact log*/
    // if (logIndexToUpdate !== -1) {
    //   // this.logs.splice(logIndexToUpdate, 1, log);
    //   this.logs[logIndexToUpdate] = log;
    // }

    /* code to add latest log to top*/
    if (logIndexToUpdate !== -1) {
      this.logs.splice(logIndexToUpdate, 1);
    }
    this.logs.unshift(log);

    // update local storage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  deleteLog(id: string) {
    const logIndexToUpdate = this.logs.findIndex((l) => l.id === id);
    this.logs.splice(logIndexToUpdate, 1);
    // update local storage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }
}
