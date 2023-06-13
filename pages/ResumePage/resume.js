import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumePage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Document file="/path/to/your/resume.pdf">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default ResumePage;
