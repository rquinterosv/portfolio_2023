import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

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
    <View style={styles.resume}>
      <View style={styles.section}>
        <Text style={styles.header}>Your Name</Text>
        <Text style={styles.content}>Email: your@email.com</Text>
        <Text style={styles.content}>Phone: (123) 456-7890</Text>
        <Text style={styles.content}>Website: www.yourwebsite.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>About Me</Text>
        <Text style={styles.content}>
          As a highly motivated and results-driven web and business developer, I bring a relentless passion for crafting innovative solutions and driving business growth...
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Education</Text>
        <Text style={styles.subHeader}>Full Stack Web Development with Co-Op</Text>
        <Text style={styles.content}>Canadian College of Technology and Business: CCTB (Sept 2023 - now)</Text>
        {/* Add more education entries if applicable */}
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Work Experience</Text>
        <Text style={styles.subHeader}>Project Manager - Desafío Latam</Text>
        <Text style={styles.content}>2021 - 2023</Text>
        <Text style={styles.content}>Proven track record of on-time, on-budget project delivery...</Text>
        {/* Add more work experience entries if applicable */}
      </View>

      {/* Add additional sections for skills, projects, certifications, etc. */}
    </View>
  );
};

export default Resume;
