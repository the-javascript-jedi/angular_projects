import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-pdf-four',
  templateUrl: './pdf-four.component.html',
  styleUrls: ['./pdf-four.component.scss']
})
export class PdfFourComponent {
 generatePdf(): void {
    const doc = new jsPDF({ orientation: 'landscape' });

    const pageHeight = doc.internal.pageSize.getHeight();
    const startX = 10;
    const startY = 80;
    const cellWidth = [35, 45, 40, 50, 40, 30, 40]; // Column widths
    const headerHeight = 20;
    const cellHeight = 10;

    const tableHeaders = [
      'Transfer Date',
      "Receiver's Country",
      'Delivery Method',
      'Transaction ID',
      'Amount Sent',
      'Transfer Fee',
      'Amount Received'
    ];

    const peopleData = [
      {
        testName: 'test name 1',
        receiverName: 'Receiver 1',
        issuedDate: '2024-07-25',
        totalAmount: '18,440',
        transactions: Array.from({ length: 20 }, (_, i) => ({
          transferDate: 'YYYY/MM/DD',
          country: 'India',
          method: (i + 1).toString(), // Increment method for each transaction
          transactionId: '12710702',
          amountSent: '10,000',
          transferFee: '780',
          amountReceived: '9,220'
        }))
      },
         {
        testName: 'test name 2',
        receiverName: 'Receiver 2',
        issuedDate: '2025-09-25',
        totalAmount: '28,440',
        transactions: Array.from({ length: 20 }, (_, i) => ({
          transferDate: 'YYYY/MM/DD',
          country: 'japan',
          method: (i + 1).toString(), // Increment method for each transaction
          transactionId: '12710702',
          amountSent: '10,000',
          transferFee: '780',
          amountReceived: '9,220'
        }))
      }
    ];

    peopleData.forEach((person, personIndex) => {
      let currentY = startY;

      // Add headers and receiver details
      const addPageHeader = () => {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(16);
        doc.text(person.testName, 10, 20);
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.text('Remittance Statement', 120, 30);
        doc.setFontSize(12);
        doc.text("Receiver's Details", 10, 60);
        doc.text(person.receiverName, 10, 70);
        doc.text('Issued date:', 215, 60);
        doc.text(person.issuedDate, 250, 60);
        doc.text('Total amount sent:', 200, 70);
        doc.text(person.totalAmount, 250, 70);

        // Render table headers
        let currentX = startX;
        tableHeaders.forEach((header, index) => {
          doc.rect(currentX, currentY, cellWidth[index], headerHeight);
          doc.text(header, currentX + 2, currentY + 10); // Adjusted for header height
          currentX += cellWidth[index];
        });

        currentY += headerHeight;
      };

      // Add footer
      const addPageFooter = () => {
        doc.setFontSize(10);
        doc.text('For customer service call: 0120-961-623', 10, pageHeight - 20);
        doc.text('Test data second line', 10, pageHeight - 15);
      };

      // Render the first page header
      addPageHeader();

      // Render table rows
      person.transactions.forEach((row) => {
        if (currentY + cellHeight > pageHeight - 30) { // Check if we need a new page
          addPageFooter();
          doc.addPage();
          currentY = startY;
          addPageHeader();
        }

        let currentX = startX;
        Object.values(row).forEach((cell, index) => {
          doc.rect(currentX, currentY, cellWidth[index], cellHeight); // Draw cell border
          doc.text(String(cell), currentX + 2, currentY + 7); // Add cell text
          currentX += cellWidth[index];
        });
        currentY += cellHeight; // Move to next row
      });

      // Add footer for the last page
      addPageFooter();

      // Add page break for the next person if applicable
      if (personIndex < peopleData.length - 1) {
        doc.addPage();
      }
    });

    // Save the PDF
    doc.save('remittance-statement.pdf');
  }
}
