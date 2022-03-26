import React from 'react';

const footerYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer bg-gray-700 p-10 text-primary-content footer-center">
      <p>Copyright &copy; {footerYear} All rights reserved</p>
    </footer>
  )
}

export default Footer
