import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'
import Navitem from '../Navitem/Navitem';

// var current = useState;
var sections = ["IITK Courses", "Projects", "Work Experience", "Contact"];

const Navbar = () => {
  const [current, setState] = useState(0);
  return <div className='navbar'>
    <div className='items-list'>
      {/* <Navitem name="IITK Courses" />
      <Navitem name="Projects" />
      <Navitem name="Work Experience" />
      <Navitem name="Contact" /> */}
      { sections.map((section, id) => (
        <React.Fragment key={id}>
          <Navitem name={section} selected={id === current}/>
        </React.Fragment>
      )) }
    </div>
  </div>
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
