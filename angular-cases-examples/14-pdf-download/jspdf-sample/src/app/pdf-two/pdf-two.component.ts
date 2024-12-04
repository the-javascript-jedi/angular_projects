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
    doc.text('{{test name 1}}', 10, 20);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('Remittance Statement', 120, 30);
   
    // Receiver Details
    doc.setFontSize(12);
    doc.text("Receiver's Details", 10, 60);
    doc.text('{{receiver name}}', 10, 70);

    // Issued Date Label
    doc.text('Issued date:', 215, 60);
    // Issued Date text
    doc.text('{{2024-07-25}}', 250, 60);
    
    // Total amount Label
    doc.text('Total amount sent:', 200, 70);
     // Total amount text
    doc.text('{{18,440}}', 250, 70);


    // Table headers -- double line
    // const tableHeaders = [
    //   ['test','Transfer Date'],
    //   ['test',"Receiver's Country"],
    //   ['test','Delivery Method'],
    //   ['test','Transaction ID'],
    //   ['test','Amount Sent'],
    //   ['test','Transfer Fee'],
    //   ['test','Amount Received']
    // ];

     const tableHeaders = [
      'Transfer Date',
      "Receiver's Country",
      'Delivery Method',
      'Transaction ID',
      'Amount Sent',
      'Transfer Fee',
      'Amount Received'
    ];


    const tableData = [
      ['YYYY/MM/DD', 'India', '1', '12710702', '10,000', '780', '9,220'],
      ['YYYY/MM/DD', 'India', '1', '12710702', '10,000', '780', '9,220'],
      ['YYYY/MM/DD', 'India', '1', '12710702', '10,000', '780', '9,220']
    ];

    // Table settings
    const startX = 10;
    const startY = 80;
    const cellWidth = [35, 45, 40, 50, 40, 30, 40]; // Column widths
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
    doc.text('test data second line', 10, pageHeight - 15); 

    // Save the PDF
    doc.save('remittance-statement.pdf');
  }
}
