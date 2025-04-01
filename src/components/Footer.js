import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>
      <p>&copy; 2025 Hemant. All rights reserved.</p>
    </footer>
  );
};

export default Footer;