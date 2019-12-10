import React from 'react';
import './Logo.css';
const logo = require('../../../../../src/assets/images/Logo.png');

const Logo = () => {
  return (
     <img src={logo} alt="Logo" />
  )
} 

export default Logo;