// import { Component, inject } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Store } from '@ngrx/store';
// import { addLog, updateLog, selectLog } from '../../store/logger.action';
// import { Log } from '../../models/log';
// import { selectCurrentLog } from '../../store/logger.selector';

// @Component({
//   selector: 'app-log-form',
//   imports: [FormsModule],
//   templateUrl: './log-form.html',
//   styleUrl: './log-form.scss',
// })
// export class LogForm {
//   text: string = '';
//   selectedLog: Log | null = null;

//   private store = inject(Store);

//   constructor() {
//     this.store.select(selectCurrentLog).subscribe((log) => {
//       this.selectedLog = log;
//       this.text = log?.text ?? '';
//     });
//   }

//   onSubmit() {
//     if (this.selectedLog) {
//       this.store.dispatch(updateLog({ log: { ...this.selectedLog, text: this.text } }));
//     } else {
//       this.store.dispatch(addLog({ log: { id: crypto.randomUUID(), text: this.text, date: new Date() } }));
//     }
//     this.text = '';
//   }

//   clearLog() {
//     this.store.dispatch(selectLog({ log: null }));
//     this.text = '';
//   }
// }

import { Component, inject, linkedSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addLog, updateLog, selectLog } from '../../store/logger.action';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectCurrentLog } from '../../store/logger.selector';

@Component({
  selector: 'app-log-form',
  imports: [FormsModule],
  templateUrl: './log-form.html',
  styleUrl: './log-form.scss',
})
export class LogForm {
  private store = inject(Store);

  selectedLog = toSignal(this.store.select(selectCurrentLog), { initialValue: null });

  // Derives text from selectedLog — auto-fills with existing log's text for editing,
  // resets to '' when selectedLog is null (create mode). Writable so user can type freely.
  text = linkedSignal(() => this.selectedLog()?.text ?? '');

  onSubmit() {
    const log = this.selectedLog();
    if (log) {
      this.store.dispatch(updateLog({ log: { ...log, text: this.text() } }));
    } else {
      this.store.dispatch(
        addLog({ log: { id: crypto.randomUUID(), text: this.text(), date: new Date() } }),
      );
    }
    this.text.set('');
  }

  clearLog() {
    this.store.dispatch(selectLog({ log: null }));
    this.text.set('');
  }
}
