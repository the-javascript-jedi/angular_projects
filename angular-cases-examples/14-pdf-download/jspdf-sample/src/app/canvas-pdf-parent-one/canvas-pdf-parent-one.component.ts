import { Component } from '@angular/core';
import { dataForPdfOne } from 'src/services/dataForPdf';
import { PdfServiceService } from 'src/services/pdf-service.service';

@Component({
  selector: 'app-canvas-pdf-parent-one',
  templateUrl: './canvas-pdf-parent-one.component.html',
  styleUrls: ['./canvas-pdf-parent-one.component.scss']
})
export class CanvasPdfParentOneComponent {
  pdfData = dataForPdfOne;

  constructor(private pdfService: PdfServiceService) {}

  downloadPdf() {
    this.pdfService.generateMultiPagePdf('Receivers_Report', this.pdfData, 'pdf-receiver');
  }
}
