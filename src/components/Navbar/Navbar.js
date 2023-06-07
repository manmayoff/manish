import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'
import Navitem from '../Navitem/Navitem';

// var current = useState;
var sections = ["IITK Courses", "Projects", "Work Experience", "Contact"];

const Navbar = (props) => {
  const [curr, setState] = useState(0);
  useEffect(() => {setState(curr)}, [curr]);

  const selectedCallback = (id) => {
    setState(id);
  };
  // console.log(curr);
  // console.log('idhar');
  return <div className='navbar'>
    <div className='items-list'>
      { sections.map((section, id) => (
        <React.Fragment key={id}>
          <div className='nav-item-wrapper' onClick={() => {
            selectedCallback(id);
            props.contentCallback(id);
            }}>

            <Navitem name={section} id={id} selected={id === curr}/>
          </div>
        </React.Fragment>
      )) }
    </div>
  </div>
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
