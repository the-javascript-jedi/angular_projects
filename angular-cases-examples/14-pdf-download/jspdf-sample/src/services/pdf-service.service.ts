import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class PdfServiceService {

  private renderer: Renderer2;

  constructor() {
    // this.renderer = rendererFactory.createRenderer(null, null);
  }

  generateMultiPagePdf(fileName: string, pdfData: any[], componentIdPrefix: string) {
    const doc = new jsPDF({ compress: true });

    // Loop through the data and generate PDF for each receiver
    pdfData.forEach((data, index) => {
      // Get the element corresponding to the receiver data
      const componentId = `${componentIdPrefix}-${index}`;
      const componentElement = document.querySelector(`#${componentId}`) as HTMLElement;;

      if (componentElement) {
        // Temporarily hide the component during PDF generation
        // this.renderer.setStyle(componentElement, 'visibility', 'hidden');

        html2canvas(componentElement).then((canvas) => {
          const imageData = canvas.toDataURL('image/jpeg');
          const imageWidth = 180; // Fit image within PDF width
          const imageHeight = (canvas.height * imageWidth) / canvas.width;
          const pageHeight = doc.internal.pageSize.height;

          // If it's not the first receiver, start a new page
          if (index > 0) {
            doc.addPage();
          }

          // Add the image to the PDF for the receiver
          doc.addImage(
            imageData,
            'JPEG',
            10, // X position
            10, // Y position
            imageWidth,
            Math.min(pageHeight - 20, imageHeight) // Fit content within the page
          );

          let currentHeight = pageHeight - 20;
          // If content overflows, continue it to the next page
          while (currentHeight < imageHeight) {
            const remainingHeight = imageHeight - currentHeight;
            doc.addPage(); // Add a new page
            doc.addImage(
              imageData,
              'JPEG',
              10, // X position
              10, // Y position
              imageWidth,
              Math.min(pageHeight - 20, remainingHeight) // Fit content to the page
            );
            currentHeight += pageHeight - 20;
          }

          // Save the PDF once all receivers are processed
          if (index === pdfData.length - 1) {
            doc.save(`${fileName}.pdf`);
          }

          // Unhide the component after PDF generation
          // this.renderer.removeStyle(componentElement, 'visibility');
        });
      }
    });
  }
}
