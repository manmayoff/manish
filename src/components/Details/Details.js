import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import PropTypes from 'prop-types';
import './Details.css';
// import './Details-js.js';
import Navbar from '../Navbar/Navbar';
import Courses from '../Courses/Courses';
import Projects from '../Projects/Projects';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import { render } from '@testing-library/react';


const renderMainContent = (id) => {
  switch(id) {
    case 0: 
      return <Courses />
    case 1: 
      return <Projects />
    case 2: 
      return <Work />
    case 3:
      return <Contact />
  }
}


const Details = () => {
  var sections = ["IITK Courses", "Projects", "Work Experience", "Contact"];
  const [id, setContent] = useState(0);
  useEffect(() => {setContent(id)}, [id]);

  const contentCallback = (id) => {setContent(id)};

  return <div>

    <div className='main-content-box'> 
        {renderMainContent(id)}
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

    <Navbar contentCallback={contentCallback} />

  </div>


};

Details.propTypes = {};

Details.defaultProps = {};

export default Details;
