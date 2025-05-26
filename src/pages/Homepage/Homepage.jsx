import React from 'react';
import { Link } from 'react-router-dom'; // for navigation links



export default function Homepage() {
  return (
    <>
     


      <main style={mainStyle}>
        <h2>Welcome to Our App</h2>
        <p>
          This app helps you create and explore problems and requirements visually on a map.
          Get started by logging in or exploring the map.
        </p>
      </main>

    </>
  );
}



const mainStyle = {
  padding: '2rem',
  textAlign: 'center',
};
