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
    /* doc.text(text to be printed,x coordinate,y-ccordinate)
    (x-coordinate): This is the horizontal position on the page, 
      -the text will start 10 mm from the left side of the page.
    (y-coordinate): This is the vertical position on the page, 
      -the text will be placed 20 mm from the top of the page.
    */
    doc.text('{{Arun test name 1}}', 10, 20);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('Remittance Statement', 120, 30);
   
    // Receiver Details
    doc.setFontSize(12);
    doc.text("Receiver's Details", 10, 60);
    doc.text('Harsh Vardhan', 10, 70);

    // Issued Details
    doc.text('Issued date: 2024-07-25', 210, 60);
    doc.text('Total amount sent: ¥18,440', 210, 70);


    // Table headers
    const tableHeaders = [
      ['japanese text','Transfer Date'],
      ['japanese text',"Receiver's Country"],
      ['japanese text','Delivery Method'],
      ['japanese text','Transaction ID'],
      ['japanese text','Amount Sent'],
      ['japanese text','Transfer Fee'],
      ['japanese text','Amount Received']
    ];


    const tableData = [
      ['YYYY/MM/DD', 'India', '1', '12710702', '10,000', '780', '9,220'],
      ['YYYY/MM/DD', 'India', '1', '12710702', '10,000', '780', '9,220'],
      ['YYYY/MM/DD', 'India', '1', '12710702', '10,000', '780', '9,220']
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
