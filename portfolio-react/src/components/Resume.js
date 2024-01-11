import React from 'react';
import datosCV from '../components/datosCV';
import perfilImage from '../img/perfil.jpeg';
import emailLogo from '../img/gmail.png';
import phoneLogo from '../img/telephone.png';
import linkedinLogo from '../img/linkedin.png';
import githubLogo from '../img/github.png';
import websiteLogo from '../img/web.png';
import locationLogo from '../img/location.png';

const Resume = () => {
  const datos = datosCV; 

  return (
    <div>
{/* First line */}
        <div className="flex flex-col md:flex-row">
{/* Left Column */}
            <div className="md:w-2/5 w-full bg-gray-200 p-4">
                <div className="text-center">
                <img
                    src={perfilImage}
                    alt="Perfil"
                    className="w-40 h-40 rounded-full mx-auto mb-4"
                />
                </div>

                <h1 className="text-lg font-bold mb-4 italic
                5" style={{ fontFamily: 'Calibri', fontSize: '2.3rem' }}>Rafael Quinteros</h1>
                <h3 className="text-lg italic mb-2" style={{ fontFamily: 'Calibri', fontSize: '1.2rem' }}>{datos.role}</h3>

                <div className="text-left">
                <h2 className="text-lg font-bold mb-2" style={{ fontFamily: 'Calibri', fontSize: '1.5rem' }}>Contacto</h2>

                <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                    <img
                        src={locationLogo}
                        alt="Location"
                        className="w-4 h-4 mr-2"
                    />
                    <p className="text-sm" style={{ fontFamily: 'Calibri', fontSize: '1rem' }}>{datos.location}</p>
                    </div>

                    <div className="flex items-center mb-2">
                    <img
                        src={emailLogo}
                        alt="Email"
                        className="w-4 h-4 mr-2"
                    />
                    <p className="text-sm" style={{ fontFamily: 'Calibri', fontSize: '1rem' }}>{datos.email}</p>
                    </div>

                    <div className="flex items-center mb-2">
                    <img
                        src={phoneLogo}
                        alt="Email"
                        className="w-4 h-4 mr-2"
                    />
                    <p className="text-sm" style={{ fontFamily: 'Calibri', fontSize: '1rem' }}>{datos.phone}</p>
                    </div>

                    <div className="flex items-center mb-2">
                    <img
                        src={linkedinLogo}
                        alt="Email"
                        className="w-4 h-4 mr-2"
                    />
                    <p className="text-sm" style={{ fontFamily: 'Calibri', fontSize: '1rem' }}>{datos.linkedin}</p>
                    </div>

                    <div className="flex items-center mb-2">
                    <img
                        src={githubLogo}
                        alt="Email"
                        className="w-4 h-4 mr-2"
                    />
                    <p className="text-sm" style={{ fontFamily: 'Calibri', fontSize: '1rem' }}>{datos.github}</p>
                    </div>

                    <div className="flex items-center mb-2">
                    <img
                        src={websiteLogo}
                        alt="Email"
                        className="w-4 h-4 mr-2"
                    />
                    <p className="text-sm" style={{ fontFamily: 'Calibri', fontSize: '1rem' }}>{datos.website}</p>
                    </div>
                </div>
                </div>

                <div>
                <h2 className="text-lg font-bold mb-2" style={{ fontFamily: 'Calibri', fontSize: '1.5rem' }}>Professional Summary</h2>
                <p className="text-sm italic" style={{ fontFamily: 'Calibri', fontSize: '1rem' }}>{datos.presentation}</p>
                </div>
            </div>

        {/* Right Column */}
            <div className="md:w-3/5 w-full bg-gray-300 p-4">
                <div>
                <h2 className="text-lg font-bold mb-2" style={{ fontFamily: 'Calibri', fontSize: '1.5rem' }}>Work experience</h2>
                {datos.experience.map((exp, index) => (
                    <div key={index}>
                    <h3 className="text-sm mb-2" style={{ fontFamily: 'Calibri', fontSize: '1.4rem' }}>{exp.title}</h3>
                    <h4 className="text-sm mb-2" style={{ fontFamily: 'Calibri', fontSize: '1.2rem', textDecoration: 'underline' }}>{exp.company}</h4>
                    <h5 className="text-sm italic mb-1" style={{ fontFamily: 'Calibri', fontSize: '0.8rem' }}>{exp.date}</h5>
                    <p className="text-sm italic mb-2" style={{ fontFamily: 'Calibri', fontSize: '1rem' }}>{exp.description}</p>
                    {/* Agregar más detalles si es necesario */}
                    </div>
                ))}
                </div>
                {/* Puedes continuar mostrando más secciones del CV */}
            </div>
        </div>

{/* Second Line */} 
    <div className="flex flex-col md:flex-row">
{/* Left Column */}
        <div className="md:w-2/5 w-full bg-gray-200 p-4">
            <div>
                <div className="md:w-full">
                    <h2 className="text-lg font-bold mb-2">Skills</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {datos.skills1.map((skill, index) => (
                            <p key={index} className="text-sm italic" style={{ fontFamily: 'Calibri', fontSize: '1rem' }}>{skill}</p>
                        ))}
                        {datos.skills2.map((skill, index) => (
                            <p key={index} className="text-sm italic" style={{ fontFamily: 'Calibri', fontSize: '1rem' }}>{skill}</p>
                        ))}
                    </div>
                </div>

            </div>

            {/* Certificates */}
            <div>
                <h2 className="text-lg font-bold mb-2 mt-5">Certificates</h2>
                <ul>
                {datos.certificates.map((certificate, index) => (
                    <li key={index} className="text-sm italic mb-2" style={{ fontFamily: 'Calibri', fontSize: '1rem' }}>
                    <strong>{certificate.title}</strong> - {certificate.issuer} ({certificate.date})
                    </li>
                ))}
                </ul>
            </div>

            {/* Languages */}
            <div>
                <h2 className="text-lg font-bold mb-2 mt-5">Languages</h2>
                <ul>
                {datos.languages.map((language, index) => (
                    <li key={index} className="text-sm italic mb-2" style={{ fontFamily: 'Calibri', fontSize: '1rem' }}>
                    <strong>{language.language}</strong> - {language.level}
                    </li>
                ))}
                </ul>
            </div>
        </div>

        {/* Right Column */}
            <div className="md:w-3/5 w-full bg-gray-300 p-4">
                <div>
                <h2 className="text-lg font-bold mb-2" style={{ fontFamily: 'Calibri', fontSize: '1.5rem' }}>Education</h2>
                {datos.education.map((edu, index) => (
                <div key={index}>
                    <h3 className="text-sm mb-2" style={{ fontFamily: 'Calibri', fontSize: '1.4rem' }}>{edu.degree}</h3>
                    <h4 className="text-sm mb-2" style={{ fontFamily: 'Calibri', fontSize: '1.2rem', textDecoration: 'underline' }}>{edu.institution}</h4>
                    <h5 className="text-sm italic mb-1" style={{ fontFamily: 'Calibri', fontSize: '0.8rem' }}>{edu.date}</h5>
                    {/* Agregar más detalles si es necesario */}
                </div>
                ))}
                </div>
                {/* Puedes continuar mostrando más secciones del CV */}
            </div>
        </div>
    </div>

  );
};

export default Resume;
