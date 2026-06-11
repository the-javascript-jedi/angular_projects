import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Log } from '../../models/log';
import { LogService } from '../../services/logService';
import { Store } from '@ngrx/store';
import { selectAllLogs } from '../../store/logger.selector';
import { Observable } from 'rxjs';
import { deleteLog } from '../../store/logger.action';

@Component({
  selector: 'app-logs',
  imports: [AsyncPipe, DatePipe],
  templateUrl: './logs.html',
  styleUrl: './logs.scss',
})
export class Logs implements OnInit {
  logs: Log[] = [];
  private store = inject(Store);
  log$: Observable<Log[]>;

  constructor(private _logService: LogService) {
    this.log$ = this.store.select(selectAllLogs);
  }

  trackLog(index: number, log: { id: string }) {
    return log.id;
  }

  deleteLog(id: string) {
    this.store.dispatch(deleteLog({ id: id }));
  }

  ngOnInit() {
    // this.logs = [
    //   { id: '1', text: 'generated components', date: new Date('12/26/2017 12:54:23') },
    //   { id: '2', text: 'added bootstrap', date: new Date('12/27/2017 12:54:23') },
    //   { id: '1', text: 'added logs  components', date: new Date('12/28/2017 12:54:23') },
    // ];
    // this.logs = this._logService.getLogs();
  }
}
