import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';
const logo = require('../../../../../src/assets/images/LogoWhite.png');



const Logo = () => {
  return (
    <Link to="/">
      <img className="logo" src={logo} alt="Logo" />
    </Link>
  )
};

export default Logo;