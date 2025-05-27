
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-speed-bump-modal',
  templateUrl: './speed-bump-modal.component.html',
  styleUrls: ['./speed-bump-modal.component.scss']
})
export class SpeedBumpModalComponent implements OnInit {
  
  constructor(
    private dialogRef: MatDialogRef<SpeedBumpModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    // Focus on the modal when it opens
    setTimeout(() => {
      const firstButton = document.querySelector('.speed-bump-modal button') as HTMLElement;
      if (firstButton) {
        firstButton.focus();
      }
    }, 100);
  }

  exitSetup(): void {
    this.dialogRef.close(true); // User wants to exit
  }

  stayOnPage(): void {
    this.dialogRef.close(false); // User wants to stay
  }

  // Handle escape key
  onEscape(): void {
    // Prevent escape key from closing the modal
    // since disableClose is true, this won't actually close it
    // but you can add custom logic here if needed
  }
}