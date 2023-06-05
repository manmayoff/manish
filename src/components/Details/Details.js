import React from 'react';
import { motion } from "framer-motion"
import PropTypes from 'prop-types';
import './Details.css';
// import './Details-js.js';
import Navbar from '../Navbar/Navbar';


const Details = () => (
  <div>

    <div className='main-content-box'> 
        Main content
    </div>

    <Navbar />

    <div class='ripple-background'>
      <div class='circle xxlarge shade1'></div>
      <div class='circle xlarge shade2'></div>
      <div class='circle large shade3'></div>
      <div class='circle mediun shade4'></div>
      <div class='circle small shade5'></div>
    </div>
  </div>


);

Details.propTypes = {};

Details.defaultProps = {};

export default Details;
