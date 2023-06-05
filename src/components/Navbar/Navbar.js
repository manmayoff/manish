import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'
import Navitem from '../Navitem/Navitem';


const Navbar = () => (
  <div className='navbar'>
    <div className='items-list'>

      <Navitem name="IITK Courses" />
      <Navitem name="Projects" />
      <Navitem name="Work Experience" />
      <Navitem name="Contact" />
    </div>
  </div>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
