// src/components/Navbar.js
import React from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import '../App.css';
import Hero from '../components/Hero';
import Pdf from '../components/Pdf';
import Resume from '../components/Resume';

function Home() {
  return (
    <><Hero />
     <div>
      <h1>My Resume</h1>
      <PDFDownloadLink document={<Pdf />} fileName="resume.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink>
      <PDFViewer width={600} height={800}>
        <Pdf />
      </PDFViewer>
    </div></>
  );
}

export default Home;
