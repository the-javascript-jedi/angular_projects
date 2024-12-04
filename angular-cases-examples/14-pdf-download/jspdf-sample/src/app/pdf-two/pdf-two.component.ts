import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-pdf-two',
  templateUrl: './pdf-two.component.html',
  styleUrls: ['./pdf-two.component.scss']
})
export class PdfTwoComponent {
generatePdf(): void {
    // Initialize jsPDF with landscape orientation
    const doc = new jsPDF({ orientation: 'landscape' });

    // Title and header
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(16);
    doc.text('bank test', 10, 20);
    doc.setFontSize(12);
    doc.text('Statement', 10, 30);

    doc.setFontSize(10);
    doc.text('Arun Setupathi', 10, 40);
    doc.text('Issued date: 2024-07-25', 150, 40);
    doc.text('Total amount sent: ¥18,440', 150, 50);

    // Receiver Details
    doc.setFontSize(12);
    doc.text("Receiver's Details", 10, 60);
    doc.text('Harsh Vardhan', 10, 70);

    // Table headers
    const tableHeaders = [
      ['Transfer Date', 'japanese text'],
      ["Receiver's Country", 'japanese text'],
      ['Delivery Method', 'japanese text'],
      ['Transaction ID', 'japanese text'],
      ['Amount Sent', 'japanese text'],
      ['Transfer Fee', 'japanese text'],
      ['Amount Received', 'japanese text']
    ];


    const tableData = [
      ['YYYY/MM/DD', 'India', '1', '12710702', '¥10,000', '¥780', '¥9,220'],
      ['YYYY/MM/DD', 'India', '1', '12710702', '¥10,000', '¥780', '¥9,220'],
      ['YYYY/MM/DD', 'India', '1', '12710702', '¥10,000', '¥780', '¥9,220']
    ];

    // Table settings
    const startX = 10;
    const startY = 80;
    const cellWidth = [30, 40, 40, 50, 30, 30, 40]; // Column widths
    const headerHeight = 20; // Increased height for headers
    const cellHeight = 10;

    // Render table headers with borders
    let currentX = startX;
    tableHeaders.forEach((header, index) => {
      doc.rect(currentX, startY, cellWidth[index], headerHeight); // Draw cell border
      doc.text(header, currentX + 2, startY + 7); // Add header text
      currentX += cellWidth[index];
    });

    // Render table rows with borders
    let currentY = startY + headerHeight;
    tableData.forEach((row) => {
      currentX = startX;
      row.forEach((cell, index) => {
        doc.rect(currentX, currentY, cellWidth[index], cellHeight); // Draw cell border
        doc.text(cell, currentX + 2, currentY + 7); // Add cell text
        currentX += cellWidth[index];
      });
      currentY += cellHeight;
    });

     // Footer
    const pageHeight = doc.internal.pageSize.getHeight(); // Get page height dynamically
    doc.setFontSize(10);
    doc.text('For customer service call: 0120-961-623', 10, pageHeight - 20); // 20px from the bottom
    doc.text('japanese text', 10, pageHeight - 15); 

    // Save the PDF
    doc.save('remittance-statement.pdf');
  }
}
