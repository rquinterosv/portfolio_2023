// src/components/Navbar.js
import React from 'react';
import { PDFViewer} from '@react-pdf/renderer';
import '../App.css';
import Pdf from '../components/Pdf';
import datosCV from '../components/datosCV';


function Home() {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', width: '100%', marginTop: '30px' }}>
        <h1>My Resume</h1>
        <div className="pdf-container">
          <PDFViewer style={{ width: '98%', height: '100vh' }}>
            <Pdf datos={datosCV} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
}

export default Home;
