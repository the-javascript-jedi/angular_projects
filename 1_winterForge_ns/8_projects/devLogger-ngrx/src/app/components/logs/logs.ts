import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Log } from '../../models/log';
import { Store } from '@ngrx/store';
import { selectAllLogs } from '../../store/logger.selector';
import { toSignal } from '@angular/core/rxjs-interop';
import { deleteLog, selectLog } from '../../store/logger.action';

@Component({
  selector: 'app-logs',
  imports: [DatePipe],
  templateUrl: './logs.html',
  styleUrl: './logs.scss',
})
export class Logs {
  private store = inject(Store);
  logs = toSignal(this.store.select(selectAllLogs), { initialValue: [] as Log[] });

  deleteLog(id: string) {
    this.store.dispatch(deleteLog({ id }));
  }

  selectSingleLog(log: Log) {
    this.store.dispatch(selectLog({ log }));
  }
}
