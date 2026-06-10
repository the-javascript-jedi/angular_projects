import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Log } from '../../models/log';
import { LogService } from '../../services/logService';

@Component({
  selector: 'app-log-form',
  imports: [FormsModule],
  templateUrl: './log-form.html',
  styleUrl: './log-form.scss',
})
export class LogForm {
  id: string = '';
  text: string = '';
  date: any = '';
  isNew: boolean = true;
  // constructor(private _logService: LogService) {}
  private _logService = inject(LogService);

  ngOnInit() {
    this._logService.selectedLog.subscribe((log) => {
      console.log('subscribed log', log);
      if (log.id !== '') {
        this.text = log.text;
        this.id = log.id;
        this.date = log.date;
        this.isNew = false;
      }
    });
  }

  onSubmit() {
    // check if new log
    if (this.isNew) {
      const newLog = {
        id: crypto.randomUUID(),
        text: this.text,
        date: new Date(),
      };
      this._logService.addLog(newLog);
    } else {
      const updLog = {
        id: this.id,
        text: this.text,
        date: new Date(),
      };
      this._logService.updateLog(updLog);
    }
    this.clearForm();
  }

  clearForm() {
    this.text = '';
    this.id = '';
    this.date = '';
    this.isNew = true;
  }
}
