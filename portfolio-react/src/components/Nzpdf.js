import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import perfilImage from '../img/perfil.jpeg'; // Importa la imagen
import emailLogo from '../img/gmail.png';
import phoneLogo from '../img/telephone.png';
import linkedinLogo from '../img/linkedin.png';
import githubLogo from '../img/github.png';
import websiteLogo from '../img/web.png';
import locationLogo from '../img/location.png';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
  },
  section: {
    flexDirection: 'row',
    padding: 3,
    width: '100%',
    borderBottom: 1,
    borderBottomColor: '#000',
  },
  leftColumn: {
    width: '70%',
    paddingRight: 10,
  },
  rightColumn: {
    paddingRight: 30,
    paddingTop: 20,
    width: '30%',
    alignItems: 'flex-end',
  },
  column: {
    flexDirection: 'column',
    padding: '10px',
  },
  title: {
    fontSize: 35,
    marginBottom: 5,
    borderBottomColor: '#000',
  },
  header: {
    fontSize: 22,
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 20,
    marginBottom: 5,
    fontStyle: 'italic',
    textDecoration: 'underline',
  },
  infoPresentation: {
    fontSize: 15,
    marginBottom: 4,
    marginTop: 2,
    fontWeight: 'bold'
  },
  infoItem: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  pointItem: {
    fontSize: 12,
    marginLeft: 10,
  },
  divider: {
    borderBottom: 1,
    borderBottomColor: '#000',
    marginBottom: 5,
  },
});

const Nzpdf = ({ datos }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {/* Columna Izquierda */}
          <View style={styles.leftColumn}>
            
            <View style={styles.column}>
              <Text style={styles.title}>Curriculum Vitae</Text>
              <Text style={styles.header}>{datos.name}</Text>
              <Text style={styles.subHeader}>Contact</Text>
              <View style={styles.column}>
                <View style={{ flexDirection: 'row', alignItems: 'left', marginBottom: 5 }}>
                  <Image style={{ width: 15, height: 15, marginRight: 5 }} source={locationLogo} />
                  <Text style={styles.pointItem}>{datos.location}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'left', marginBottom: 5 }}>
                  <Image style={{ width: 15, height: 15, marginRight: 5 }} source={emailLogo} />
                  <Text style={styles.pointItem}>{datos.email}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'left', marginBottom: 5 }}>
                  <Image style={{ width: 15, height: 15, marginRight: 5 }} source={phoneLogo} />
                  <Text style={styles.pointItem}>{datos.phone}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Columna Derecha */}
          <View style={styles.rightColumn}>
            <View>
                <Image style={{ width: 150, height: 150, borderRadius: 80 }} source={perfilImage} />
            </View>
          </View>
        </View>

        <View style={styles.column}>
          <Text style={styles.subHeader}>Professional Summary</Text>
          <Text style={styles.pointItem}>{datos.presentation}</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.subHeader}>Work Experience</Text>
          {datos.experience.map((exp, index) => (
            <View key={index}>
              <Text style={styles.infoItem}>{exp.title}</Text>
              <Text style={[styles.infoPresentation, { fontSize: 11, fontStyle: 'italic' }]}>
                {exp.company} | {exp.date}
              </Text>
              <View />
              {exp.description.map((point, idx) => (
                <Text key={idx} style={styles.pointItem}>
                  {point}
                </Text>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.column}>
            <Text style={styles.subHeader}>Education</Text>
            {datos.education.map((edu, index) => (
                <View key={index}>
                <Text style={styles.infoItem}>{edu.degree}</Text>
                <Text style={[styles.infoPresentation, { fontSize: 11, fontStyle: 'italic' }]}>
                    {edu.institution} | {edu.date}
                </Text>
                </View>
            ))}
        </View>

      </Page>
    </Document>
  );
};

export default Nzpdf;
