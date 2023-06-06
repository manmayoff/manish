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

    <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >

    <Navbar />

  </div>


);

Details.propTypes = {};

Details.defaultProps = {};

export default Details;
