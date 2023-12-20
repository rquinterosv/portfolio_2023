import React from 'react';
import { PDFDownloadLink} from '@react-pdf/renderer';
import Pdf from '../components/Pdf';
import datosCV from '../components/datosCV';
import Resume from '../components/Resume'

const WorkExp = () => {
  return (
    <><div className="bg-black text-white p-10 pt-20">
      <div className="flex justify-center items-center">
        <PDFDownloadLink document={<Pdf datos={datosCV} />} fileName="Resume Rafael Quinteros.pdf">
            {({ blob, url, loading, error }) => (
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {loading ? 'Loading Document...' : 'Download PDF'}
              </button>
            )}
          </PDFDownloadLink>
      </div>
    </div>
    <div>
      <Resume />
    </div>
      </>
  );
};

export default WorkExp;
