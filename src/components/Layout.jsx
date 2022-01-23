import React from 'react';
import '../styles/components/Layout.css';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
