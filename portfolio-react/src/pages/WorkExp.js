import React from 'react';
import RafaelQuinterosPdf from '../components/RafaelQuinteros.pdf';
import Resume from '../components/Resume';

const WorkExp = () => {
  return (
    <div>
      <div className="bg-black text-white p-10 pt-20">
        <div className="flex justify-center items-center">
          <a
            href={RafaelQuinterosPdf}
            download="RafaelQuinteros.pdf"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Download PDF
          </a>
        </div>
      </div>
      <div>
        <Resume />
      </div>
    </div>
  );
};

export default WorkExp;
