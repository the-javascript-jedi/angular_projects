import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-pdf-five',
  templateUrl: './pdf-five.component.html',
  styleUrls: ['./pdf-five.component.scss']
})
export class PdfFiveComponent {
     generatePdf(): void {
    // Set orientation to portrait
    let doc = new jsPDF({ orientation: 'portrait', compress: true });
    let width = doc.internal.pageSize.getWidth();

    let generateData = function (amount: any) {
      let result = [];
      let data = {
        'Transfer Date': 'DD/MM/YYYY',
        receivers_country: 'IN',
        delivery_method: 'GPay',
        transaction_ID: '',
        amount_sent: '$',
        transfer_fee: '0',
        amount_received: '0',
      };
      for (let i = 0; i < amount; i += 1) {
        data.transaction_ID = (i + 1).toString();
        result.push(Object.assign({}, data));
        if (result.length % 10 === 0) {
          if (i > 10) {
            doc.addPage();
            doc.setPage(i);
          }
          doc.text('{{test name 1}}', 10, 10);
          doc.setFontSize(20);
          doc.setFont('helvetica', 'bold');
          doc.text('Remittance Statement', 70, 30);

          // Receiver Details
          doc.setFontSize(12);
          doc.text("Receiver's Details", 10, 40);
          doc.text('{{receiver name}}', 10, 50);

          // Issued Date Label
          doc.text('Issued Date:', 140, 40);

          // Issued Date text
          doc.text('{{2024-07-25}}', 180, 40);

          // Total amount Label
          doc.text('Total amount sent:', 140, 50);

          // Total amount text
          doc.text('{{18,440}}', 180, 50);

          doc.table(10, 60, result, headers, { autoSize: true });
          result = [];

          // Footer
          const pageHeight = doc.internal.pageSize.getHeight(); // Get page height dynamically
          doc.setFontSize(10);
          doc.text(
            'For customer service call: 0120-961-623',
            10,
            pageHeight - 20
          ); // 20px from the bottom
          doc.text('test data second line', 10, pageHeight - 15);
        }
      }
      return result;
    };

    function createHeaders(keys: any) {
      let result = [];

      for (let i = 0; i < keys.length; i += 1) {
        result.push({
          id: keys[i],
          name: keys[i],
          prompt: keys[i],
          width: width,
          align: 'center',
          padding: 0,
        });
      }

      return result;
    }

    let headers = createHeaders([
      'Transfer Date',
      'receivers_country',
      'delivery_method',
      'transaction_ID',
      'amount_sent',
      'transfer_fee',
      'amount_received',
    ]);

    doc.table(10, 30, generateData(100), headers, {
      autoSize: false,
      margins: 1,
    });

    // Footer
    const pageHeight = doc.internal.pageSize.getHeight(); // Get page height dynamically

    doc.setFontSize(10);
    doc.text('For customer service call: 0120-961-623', 10, pageHeight - 20); // 20px from the bottom
    doc.text('test data second line', 10, pageHeight - 15);

    // Save the PDF
    doc.save('remittance-statement_pdf_two.pdf');
  }




    
}
