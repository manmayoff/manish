import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Navitem.css';


const Navitem = (props) => {
  var class_string = (props.selected ? 'selected': '');
  return <div className='nav-item'>
    <div className={class_string}>
      {props.name}
    </div>
  </div>
};

Navitem.propTypes = {};

Navitem.defaultProps = {};

export default Navitem;
