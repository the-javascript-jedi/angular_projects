import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-canvas-pdf-one',
  templateUrl: './canvas-pdf-one.component.html',
  styleUrls: ['./canvas-pdf-one.component.scss']
})
export class CanvasPdfOneComponent {
@Input() data: any;
}
