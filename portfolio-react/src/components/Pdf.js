import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import perfilImage from '../img/perfil.jpeg'; // Importa la imagen
import emailLogo from '../img/gmail.png';
import phoneLogo from '../img/telephone.png';
import linkedinLogo from '../img/linkedin.png';
import githubLogo from '../img/github.png';
import websiteLogo from '../img/web.png';
import locationLogo from '../img/location.png';

// Fuente Calibri
import CalibriBoldItalic from '../css/calibri/Calibri-Bold-Italic.ttf';
import CalibriBold from '../css/calibri/Calibri-Bold.ttf';
import CalibriItalic from '../css/calibri/Calibri-Italic.ttf';
import CalibriLight from '../css/calibri/Calibri-Light.ttf';


Font.register({
  family: 'Calibri',
  fonts: [
    { src: CalibriBoldItalic, fontWeight: 'bold', fontStyle: 'italic' },
    { src: CalibriBold, fontWeight: 'bold' },
    { src: CalibriItalic, fontStyle: 'italic' },
    { src: CalibriLight, fontWeight: 300 }, // Si deseas utilizar la versión ligera
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    padding: 10,
    flexGrow: 1,
  },
  column: {
    flexDirection: 'column',
    marginBottom: 10,
    borderBottom: 1,
    borderBottomColor: '#000',
    padding: 5,
  },
  title: {
    fontFamily: 'Calibri',
    fontWeight: 'bold',
    fontSize: 34,
    marginBottom: 5,
  },
  header: {
    fontFamily: 'Calibri',
    fontSize: 21,
    marginBottom: 5,
  },
  subHeader1: {
    fontFamily: 'Calibri',
    fontStyle: 'italic',
    fontSize: 16,
    marginBottom: 3,
  },
  subHeader: {
    fontFamily: 'Calibri',
    fontStyle: 'italic',
    fontSize: 16,
    marginBottom: 3,
    textDecoration: 'underline',
  },
  infoPresentation: {
    fontFamily: 'Calibri',
    fontSize: 14,
    marginBottom: 4,
    marginTop: 2,
  },
  pointItem: {
    fontFamily: 'Calibri',
    fontSize: 10, 
    padding: 2,
    marginBottom: 3,
  },
  pointItem1: {
    fontFamily: 'Calibri',
    fontSize: 11, 
    marginBottom: 3,
  },
});

const Pdf = ({ datos }) => {

return (  
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={[styles.section, { width: '60%' }]}>

          <View style={styles.column}>
            <Text style={styles.title}>Curriculum Vitae</Text>
            <Text style={styles.header}>{datos.name}</Text>
            <Text style={styles.subHeader1}>{datos.role}</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.subHeader}>Professional Summary</Text>
            <Text style={styles.pointItem1}>{datos.presentation}</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.subHeader}>Work Experience</Text>
            {datos.experience.map((exp, index) => (
              <View key={index}>
                <Text style={[styles.subHeader1]}>{exp.title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                  <Text style={[styles.infoPresentation]}>
                    {exp.company}
                  </Text>
                  <Text style={[styles.infoPresentation]}>
                    | {exp.date}
                  </Text>
                </View>
                <View>
                  {exp.description.map((point, idx) => (
                    <View key={idx}>
                      <Text style={styles.pointItem}>{point}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={[styles.section, { width: '40%' }]}>

          <View style={{ alignItems: 'left' }}>
            <Image style={{ width: 150, height: 150, borderRadius: 80 }} source={perfilImage} />
          </View>

          <View style={styles.column}>
            <Text style={styles.subHeader}>Contact</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              <Image style={{ width: 15, height: 15, marginRight: 5 }} source={locationLogo} />
              <Text style={styles.infoPresentation}>{datos.location}</Text>
            </View>  
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              <Image style={{ width: 15, height: 15, marginRight: 5 }} source={emailLogo} />
              <Text style={styles.infoPresentation}>{datos.email}</Text>
            </View>   
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              <Image style={{ width: 15, height: 15, marginRight: 5 }} source={phoneLogo} />
              <Text style={styles.infoPresentation}>{datos.phone}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              <Image style={{ width: 15, height: 15, marginRight: 5 }} source={linkedinLogo} />
              <Text style={styles.infoPresentation}>{datos.linkedin}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              <Image style={{ width: 15, height: 15, marginRight: 5 }} source={githubLogo} />
              <Text style={styles.infoPresentation}>{datos.github}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              <Image style={{ width: 15, height: 15, marginRight: 5 }} source={websiteLogo} />
              <Text style={styles.infoPresentation}>{datos.website}</Text>
            </View>                   
          </View>

          <View style={styles.container}>
            <Text style={styles.subHeader}>Skills</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={[styles.column, { flex: 1 }]}>
                {datos.skills1 && datos.skills1.map((skill, index) => (
                  <Text key={index} style={styles.pointItem}>
                    {skill}
                  </Text>
                ))}
              </View>
              <View style={[styles.column, { flex: 1 }]}>
                {datos.skills2 && datos.skills2.map((skill, index) => (
                  <Text key={index} style={styles.pointItem}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          </View>


          <View style={styles.column}>
            <Text style={styles.subHeader}>Education</Text>
            {datos.education.map((edu, index) => (
              <View key={index}>
                <Text style={[styles.subHeader1]}>{edu.degree}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                  <Text style={[styles.pointItem1]}>
                    {edu.institution}
                  </Text>
                  <Text style={[styles.pointItem1]}>
                    | {edu.date}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          <View style={[styles.column]}>
          <Text style={styles.subHeader}>Languages</Text>
          <View>
            {datos.languages.map((language, index) => (
              <Text key={index} style={index % 2 === 0 ? styles.pointItem1 : styles.pointItem1}>
                {`${language.language}: ${language.level}`}
              </Text>
            ))}
          </View>
        </View>



        </View>
        
      </Page>
    </Document>
  );
};

export default Pdf;

