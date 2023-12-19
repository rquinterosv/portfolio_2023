import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Pdf from '../components/Pdf'; 
import datosCV from '../components/datosCV'; 



const WorkExp = () => {
    return (
      <div className="bg-black text-white p-8">
        <h2 className="text-2xl font-bold mb-4">Experiencia Laboral</h2>
        <div className="flex justify-center items-center">
            <PDFViewer width="600" height="800">
            <Pdf datos={datosCV} />
            </PDFViewer>
        </div>
        </div>
        );
    };
  
  export default WorkExp;