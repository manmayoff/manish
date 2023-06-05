import React from 'react';
import PropTypes from 'prop-types';
import './Navitem.css';


const Navitem = (props) => (
  <div className='nav-item'>
    <div>
      {props.name}
    </div>
  </div>
);

Navitem.propTypes = {};

Navitem.defaultProps = {};

export default Navitem;
