import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addLog, updateLog, selectLog } from '../../store/logger.action';
import { Log } from '../../models/log';
import { selectCurrentLog } from '../../store/logger.selector';

@Component({
  selector: 'app-log-form',
  imports: [FormsModule],
  templateUrl: './log-form.html',
  styleUrl: './log-form.scss',
})
export class LogForm {
  text: string = '';
  selectedLog: Log | null = null;

  private store = inject(Store);

  constructor() {
    this.store.select(selectCurrentLog).subscribe((log) => {
      this.selectedLog = log;
      this.text = log?.text ?? '';
    });
  }

  onSubmit() {
    if (this.selectedLog) {
      this.store.dispatch(updateLog({ log: { ...this.selectedLog, text: this.text } }));
    } else {
      this.store.dispatch(addLog({ log: { id: crypto.randomUUID(), text: this.text, date: new Date() } }));
    }
    this.text = '';
  }

  clearLog() {
    this.store.dispatch(selectLog({ log: null }));
    this.text = '';
  }
}
