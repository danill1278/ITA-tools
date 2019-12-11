import React from 'react';
import './Logo.css';
const logo = require('../../../../../src/assets/images/LogoWhite.png');



const Logo = () => {
  return (
     <img className="logo" src={logo} alt="Logo" />
  )
} ;

export default Logo;