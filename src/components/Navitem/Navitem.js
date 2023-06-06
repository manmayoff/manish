import React from 'react';
import PropTypes from 'prop-types';
import './Navitem.css';


const Navitem = (props) => {
  var class_string = (props.selected ? 'selected': '');
  // console.log(class_string);
  return <div className='nav-item'>
    <div className={class_string}>
      {props.name}, {props.selected ? 1 : 0}
    </div>
  </div>
};

Navitem.propTypes = {};

Navitem.defaultProps = {};

export default Navitem;
