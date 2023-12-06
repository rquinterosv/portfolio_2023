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
    fontSize: 35,
    marginBottom: 5,
  },
  header: {
    fontSize: 22,
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 17,
    marginBottom: 5,
    fontStyle: 'italic', 
  },
  infoPresentation: {
    fontSize: 14,
    marginBottom: 4,
    marginTop: 2,
  },
  infoItem: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  pointItem: {
    fontSize: 10, 
    padding: 4,
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
            <Text style={styles.subHeader}>{datos.role}</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.subHeader}>Professional Summary</Text>
            <Text style={styles.infoPresentation}>{datos.presentation}</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.subHeader}>Work Experience</Text>
            {datos.experience.map((exp, index) => (
              <View key={index}>
                <Text style={[styles.infoItem, { paddingTop: 3 }]}>{exp.title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                  <Text style={[styles.infoPresentation, { fontSize: 11, font: 'italic' }]}>
                    {exp.company}
                  </Text>
                  <Text style={[styles.infoPresentation, { fontSize: 11, font: 'italic', marginLeft: 5 }]}>
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

          <View style={styles.column}>
            <Text style={styles.subHeader}>Education</Text>
            <Text style={styles.infoPresentation}>{datos.eductation}</Text>
          </View>
        </View>

        <View style={[styles.section, { width: '40%' }]}>
          <View style={{ alignItems: 'left' }}>
            <Image style={{ width: 150, height: 150, borderRadius: 80 }} source={perfilImage} />
          </View>
          <View style={styles.column}>
            <Text style={styles.subHeader}>Contact</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
              <Image style={{ width: 15, height: 15, marginRight: 5 }} source={locationLogo} />
              <Text style={styles.infoItem}>{datos.location}</Text>
            </View>  
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
              <Image style={{ width: 15, height: 15, marginRight: 5 }} source={emailLogo} />
              <Text style={styles.infoItem}>{datos.email}</Text>
            </View>   
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
              <Image style={{ width: 15, height: 15, marginRight: 5 }} source={phoneLogo} />
              <Text style={styles.infoItem}>{datos.phone}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
              <Image style={{ width: 15, height: 15, marginRight: 5 }} source={linkedinLogo} />
              <Text style={styles.infoItem}>{datos.linkedin}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
              <Image style={{ width: 15, height: 15, marginRight: 5 }} source={githubLogo} />
              <Text style={styles.infoItem}>{datos.github}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
              <Image style={{ width: 15, height: 15, marginRight: 5 }} source={websiteLogo} />
              <Text style={styles.infoItem}>{datos.website}</Text>
            </View>                   
          </View>
          <View style={styles.column}>
            <Text style={styles.subHeader}>Technical Skills</Text>
            <Text style={styles.infoPresentation}>{datos.presentation}</Text>
          </View>
        </View>
        {/* Más contenido del currículum */}
      </Page>
    </Document>
  );
};

export default Pdf;

