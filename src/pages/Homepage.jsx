import React from 'react';
import { Link } from 'react-router-dom'; // for navigation links

export default function Homepage() {
  return (
    <>
      <header style={headerStyle}>
        <h1>My App Logo</h1>
        <nav>
          <Link to="/login" style={linkStyle}>Login</Link> |{' '}
          <Link to="/map" style={linkStyle}>Map</Link>
        </nav>
      </header>

      <main style={mainStyle}>
        <h2>Welcome to Our App</h2>
        <p>
          This app helps you create and explore problems and requirements visually on a map.
          Get started by logging in or exploring the map.
        </p>
      </main>

      <footer style={footerStyle}>
        <p>© 2025 Your Company Name</p>
      </footer>
    </>
  );
}

const headerStyle = {
  padding: '1rem',
  backgroundColor: '#282c34',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const linkStyle = {
  color: 'lightblue',
  textDecoration: 'none',
  margin: '0 10px',
};

const mainStyle = {
  padding: '2rem',
  textAlign: 'center',
};

const footerStyle = {
  padding: '1rem',
  backgroundColor: '#282c34',
  color: 'white',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};
