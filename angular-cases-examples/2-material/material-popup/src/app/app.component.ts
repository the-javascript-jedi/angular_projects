import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';
import { SpeedBumpModalComponent } from './speed-bump-modal/speed-bump-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-popup';
 constructor(private dialog: MatDialog) {}
    openDialog(): void {
    this.dialog.open(ExampleDialogComponent);
  }
    openDialogTwo(): void {
    this.dialog.open(SpeedBumpModalComponent);
  }
}
