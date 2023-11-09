import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Resume from './Resume';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const Pdf = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Resume />
          {/* Other resume sections */}
        </View>
      </Page>
    </Document>
  );
};

export default Pdf;
