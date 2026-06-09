import { Component, OnInit } from '@angular/core';
import { NgFor, DatePipe } from '@angular/common';
import { Log } from '../../models/log';
import { LogService } from '../../services/logService';

@Component({
  selector: 'app-logs',
  imports: [NgFor, DatePipe],
  templateUrl: './logs.html',
  styleUrl: './logs.scss',
})
export class Logs implements OnInit {
  logs: Log[] = [];

  constructor(private _logService: LogService) {}

  trackLog(index: number, log: { id: string }) {
    return log.id;
  }

  ngOnInit() {
    // this.logs = [
    //   { id: '1', text: 'generated components', date: new Date('12/26/2017 12:54:23') },
    //   { id: '2', text: 'added bootstrap', date: new Date('12/27/2017 12:54:23') },
    //   { id: '1', text: 'added logs  components', date: new Date('12/28/2017 12:54:23') },
    // ];
    this.logs = this._logService.getLogs();
  }
}
