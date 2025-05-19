import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-speed-bump-modal',
  templateUrl: './speed-bump-modal.component.html',
  styleUrls: ['./speed-bump-modal.component.scss']
})
export class SpeedBumpModalComponent {
 constructor(
    public dialogRef: MatDialogRef<SpeedBumpModalComponent>
  ) {}

    exitSetup(): void {
    this.dialogRef.close(true); // User wants to exit
  }

  stayOnPage(): void {
    this.dialogRef.close(false); // User wants to stay
  }
}
