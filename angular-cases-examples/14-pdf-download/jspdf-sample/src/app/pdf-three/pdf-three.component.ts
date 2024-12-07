import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-pdf-three',
  templateUrl: './pdf-three.component.html',
  styleUrls: ['./pdf-three.component.scss']
})
export class PdfThreeComponent {
   generatePdf(): void {
    // Initialize jsPDF with landscape orientation
    const doc = new jsPDF({ orientation: 'landscape' });

    // Data for multiple people
    const peopleData = [
      {
        testName: 'test name 1',
        receiverName: 'Receiver 1',
        issuedDate: '2024-07-25',
        totalAmount: '18,440',
        transactions: [
          { transferDate: 'YYYY/MM/DD', country: 'India', method: '1', transactionId: '12710702', amountSent: '10,000', transferFee: '780', amountReceived: '9,220' },
          { transferDate: 'YYYY/MM/DD', country: 'India', method: '1', transactionId: '12710702', amountSent: '10,000', transferFee: '780', amountReceived: '9,220' }
        ]
      },
      {
        testName: 'test name 2',
        receiverName: 'Receiver 2',
        issuedDate: '2024-08-10',
        totalAmount: '22,500',
        transactions: [
          { transferDate: 'YYYY/MM/DD', country: 'USA', method: '2', transactionId: '12810703', amountSent: '12,000', transferFee: '880', amountReceived: '11,120' },
          { transferDate: 'YYYY/MM/DD', country: 'UK', method: '3', transactionId: '12810704', amountSent: '15,000', transferFee: '900', amountReceived: '14,100' }
        ]
      }
    ];

    // Table headers
    const tableHeaders = [
      'Transfer Date',
      "Receiver's Country",
      'Delivery Method',
      'Transaction ID',
      'Amount Sent',
      'Transfer Fee',
      'Amount Received'
    ];

    // Table settings
    const startX = 10;
    const startY = 80;
    const cellWidth = [35, 45, 40, 50, 40, 30, 40];  // Column widths
    const headerHeight = 20;  // Increased height for headers
    const cellHeight = 10;

    // Loop through peopleData to generate multiple pages
    peopleData.forEach((person, personIndex) => {
      // Title and header
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(16);
      doc.text(person.testName, 10, 20);  // Title: Test Name
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      doc.text('Remittance Statement', 120, 30);  // Main heading
      
      // Receiver Details
      doc.setFontSize(12);
      doc.text("Receiver's Details", 10, 60);
      doc.text(person.receiverName, 10, 70);  // Receiver's Name

      // Issued Date Label
      doc.text('Issued date:', 215, 60);
      // Issued Date text
      doc.text(person.issuedDate, 250, 60);

      // Total Amount Label
      doc.text('Total amount sent:', 200, 70);
      // Total Amount text
      doc.text(person.totalAmount, 250, 70);

      // Render table headers with borders
      let currentX = startX;
      tableHeaders.forEach((header, index) => {
        doc.rect(currentX, startY, cellWidth[index], headerHeight);  // Draw cell border
        doc.text(header, currentX + 2, startY + 7);  // Add header text
        currentX += cellWidth[index];
      });

      // Render table rows with borders using transactions for each person
      let currentY = startY + headerHeight;
      person.transactions.forEach((row) => {
        currentX = startX;
        // For each row, access the object properties dynamically
        Object.values(row).forEach((cell, index) => {
          doc.rect(currentX, currentY, cellWidth[index], cellHeight);  // Draw cell border
          doc.text(cell, currentX + 2, currentY + 7);  // Add cell text
          currentX += cellWidth[index];
        });
        currentY += cellHeight;  // Move to the next row
      });

      // Footer
      const pageHeight = doc.internal.pageSize.getHeight();  // Get page height dynamically
      doc.setFontSize(10);
      doc.text('For customer service call: 0120-961-623', 10, pageHeight - 20);  // Footer
      doc.text('test data second line', 10, pageHeight - 15);  // Footer

      // If this is not the last person, add a page break
      if (personIndex < peopleData.length - 1) {
        doc.addPage();
      }
    });

    // Save the PDF
    doc.save('remittance-statement.pdf');
  }
  
}
