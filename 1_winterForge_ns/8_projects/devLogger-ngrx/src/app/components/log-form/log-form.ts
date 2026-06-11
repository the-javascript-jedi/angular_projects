import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addLog } from '../../store/logger.action';

@Component({
  selector: 'app-log-form',
  imports: [FormsModule],
  templateUrl: './log-form.html',
  styleUrl: './log-form.scss',
})
export class LogForm {
  text: any = '';

  private store = inject(Store);

  onSubmit() {
    const newLog = {
      id: crypto.randomUUID(),
      text: this.text,
      date: new Date(),
    };
    console.log('newLog', newLog);
    this.store.dispatch(addLog({ log: newLog }));
  }
}
