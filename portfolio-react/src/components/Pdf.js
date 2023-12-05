import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  column: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 5,
    fontStyle: 'italic', 
  },
  infoPresentation: {
    fontSize: 10,
    marginBottom: 3,
    marginTop: 2,
  },
  infoItem: {
    fontSize: 12,
    marginBottom: 3,
    fontWeight: 'bold',
  },
});

const Pdf = ({ datos }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Derecha del CV con 60% de width */}
      <View style={[styles.section, { width: '60%' }]}>
        <View style={styles.column}>
          <Text style={styles.header}>{datos.name}</Text>
          <Text style={styles.subHeader}>{datos.role}</Text>
          <Text style={styles.infoPresentation}>{datos.presentation}</Text>
        </View>
      </View>
      {/* Izquierda del CV con 40% de width */}
      <View style={[styles.section, { width: '40%' }]}>
        <View style={styles.column}> 
          <Text style={styles.subHeader}>Contact Information</Text>
          <Text style={styles.infoItem}>Email: {datos.email}</Text>
          <Text style={styles.infoItem}>Whatsapp: {datos.whatsapp}</Text>
          <Text style={styles.infoItem}>Phone: {datos.phone}</Text>
          <Text style={styles.infoItem}>LinkedIn: {datos.linkedin}</Text>
          <Text style={styles.infoItem}>Github: {datos.github}</Text>
          <Text style={styles.infoItem}>Página web: {datos.website}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Pdf;
