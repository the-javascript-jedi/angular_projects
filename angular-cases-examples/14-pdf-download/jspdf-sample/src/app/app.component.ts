import { Component } from '@angular/core';
import { PdfServiceService } from 'src/services/pdf-service.service';
import {data} from "../services/data"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jspdf-sample';

  pdfData = data;

  constructor(private pdfService: PdfServiceService) {}

  downloadPdf() {
    this.pdfService.generateMultiPagePdf('Receivers_Report', this.pdfData, 'pdf-receiver');
  }
}
