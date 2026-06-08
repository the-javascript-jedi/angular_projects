import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-form',
  imports: [FormsModule],
  templateUrl: './log-form.html',
  styleUrl: './log-form.scss',
})
export class LogForm {
  text: any = '';
}
