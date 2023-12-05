import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Define estilos específicos para @react-pdf/renderer
const styles = StyleSheet.create({
  resume: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    margin: 10,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  content: {
    fontSize: 12,
    marginBottom: 3,
  },
});

const Resume = () => {
  return (
    <Document>
      <Page>
        <View style={styles.resume}>
          <View style={styles.section}>
            <Text style={styles.header}>Your Name</Text>
            <Text style={styles.content}>Email: your@email.com</Text>
            <Text style={styles.content}>Phone: (123) 456-7890</Text>
            <Text style={styles.content}>Website: www.yourwebsite.com</Text>
          </View>
          {/* Resto del código... */}
        </View>
      </Page>
    </Document>
  );
};

export default Resume;
