import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-idle-popup',
  templateUrl: './idle-popup.component.html',
  styleUrls: ['./idle-popup.component.scss'],
})
export class IdlePopupComponent {
  @Input() remainingTime!: number;
  @Output() close = new EventEmitter<void>();

  resetTimer(): void {
    this.close.emit(); // Notify parent to reset timer and close popup
  }
}
