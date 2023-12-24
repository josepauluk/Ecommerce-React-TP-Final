// src/components/Layout.jsx
import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
