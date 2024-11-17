import React from 'react';

const AboutPage = () => {
  // Inline styles as JavaScript objects
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f4',
      color: '#333',
      padding: '20px',
      minHeight: '100vh',
    },
    header: {
      backgroundColor: '#4CAF50',
      color: 'white',
      textAlign: 'center',
      padding: '20px 0',
    },
    section: {
      maxWidth: '800px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
    },
    h1: {
      fontSize: '2.5em',
      marginBottom: '10px',
    },
    h2: {
      fontSize: '1.5em',
      marginTop: '20px',
      marginBottom: '10px',
    },
    p: {
      fontSize: '1.1em',
      lineHeight: '1.6',
      marginBottom: '15px',
    },
    ul: {
      listStyleType: 'disc',
      marginLeft: '20px',
    },
    footer: {
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '10px 0',
      marginTop: '30px',
      fontSize: '0.9em',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.h1}>About Case Converter</h1>
      </header>

      <section style={styles.section}>
        <h2 style={styles.h2}>Welcome to the Case Converter Project!</h2>
        <p style={styles.p}>
          Case Converter is a simple, yet powerful tool that helps users convert text between different letter cases.
          Whether you need to change text to uppercase, lowercase, title case, or even swap case, our tool makes it fast
          and easy.
        </p>

        <h2 style={styles.h2}>Why Case Converter?</h2>
        <p style={styles.p}>
          In many situations, formatting text to fit specific styles or conventions is crucial. Our Case Converter solves
          the common problem of needing to change text case quickly, whether for coding, writing, or formatting content.
        </p>

        <h2 style={styles.h2}>Key Features:</h2>
        <ul style={styles.ul}>
          <li>Convert text to Uppercase, Lowercase, Title Case, Sentence Case, and more.</li>
          <li>Instant results with no need for additional software or tools.</li>
          <li>User-friendly interface with fast processing.</li>
          <li>Completely free and accessible on any device with an internet connection.</li>
        </ul>

        <h2 style={styles.h2}>How It Works</h2>
        <p style={styles.p}>
          Simply paste or type your text into the input box, select the case you want to convert to, and click the "Convert"
          button. The tool will instantly provide you with the text in your desired case.
        </p>

        <h2 style={styles.h2}>Target Audience</h2>
        <p style={styles.p}>
          Case Converter is perfect for writers, bloggers, developers, content creators, or anyone who needs quick and
          accurate text formatting without the hassle.
        </p>

        <h2 style={styles.h2}>Technologies Used</h2>
        <p style={styles.p}>
          This project is built using HTML, CSS, and JavaScript for a seamless, fast, and responsive user experience.
        </p>

        <h2 style={styles.h2}>Get Started</h2>
        <p style={styles.p}>
          Start using the Case Converter today—it's fast, free, and simple. Just paste your text and convert it with a click!
        </p>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2024 Case Converter Project. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
