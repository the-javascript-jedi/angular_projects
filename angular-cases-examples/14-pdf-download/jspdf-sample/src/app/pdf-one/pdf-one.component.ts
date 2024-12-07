import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-pdf-one',
  templateUrl: './pdf-one.component.html',
  styleUrls: ['./pdf-one.component.scss']
})
export class PdfOneComponent {
  generatePDF() {
    // Function to generate the sample data
    const generateData = (amount: any) => {
      const result = [];
      const data: any = {
        coin: "100",
        game_group: "GameGroup",
        game_name: "XPTO2",
        game_version: "25",
        machine: "20485861",
        vlt: "0"
      };
      for (let i = 0; i < amount; i++) {
        data.id = (i + 1).toString();
        result.push({ ...data });
      }
      return result;
    };

    // Function to create headers
    const createHeaders = (keys: any) => {
      const result = [];
      for (let i = 0; i < keys.length; i++) {
        result.push({
          id: keys[i],
          name: keys[i],
          prompt: keys[i],
          width: 65,
          align: "center",
          padding: 0
        });
      }
      return result;
    };

    // Generate headers and data
    const headers = createHeaders([
      "id",
      "coin",
      "game_group",
      "game_name",
      "game_version",
      "machine",
      "vlt"
    ]);

    const data = generateData(100);

    // Create a jsPDF instance with landscape orientation
    const doc = new jsPDF('l', 'mm', 'a4');

    const startX = 10;
    const startY = 20;
    const rowHeight = 10;
    const cellPadding = 2;
    const cellWidth = 45; // width for each column
    let currentX = startX;
    let currentY = startY;

    // Function to draw headers
    const drawHeaders = () => {
      currentX = startX;
      headers.forEach((header, i) => {
        doc.rect(currentX, currentY, cellWidth, rowHeight); // Draw cell border
        doc.text(header.name, currentX + cellPadding, currentY + rowHeight / 2); // Add text with padding
        currentX += cellWidth; // Move to the next column
      });
      currentY += rowHeight; // Move to the next row after headers
    };

    // Initial header draw
    drawHeaders();

    // Draw table data
    data.forEach((row: any) => {
      currentX = startX; // Reset X position for each row
      headers.forEach((header, i) => {
        doc.rect(currentX, currentY, cellWidth, rowHeight); // Draw cell border
        doc.text(row[header.id], currentX + cellPadding, currentY + rowHeight / 2); // Add text with padding
        currentX += cellWidth; // Move to the next column
      });
      currentY += rowHeight; // Move to the next row

      // Check if the content exceeds the page height and add a new page
      if (currentY + rowHeight > doc.internal.pageSize.height - 10) {
        doc.addPage(); // Add a new page
        currentY = startY; // Reset Y position
        drawHeaders(); // Redraw headers on the new page
      }
    });

    // Save the PDF
    doc.save('table-example-landscape.pdf');
  }
}
