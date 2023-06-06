import React from 'react';
import PropTypes from 'prop-types';
import './Home.css'
import { Link } from 'react-router-dom';


const Home = () => (
  <div>
    <div className='content-box'>
      Hello, fellow humans!
      <div className='container'>
        <ul>
          <li>
            <Link to="/details" style={{textDecoration: 'none'}}>
              <div className='animated-arrow'>
                <span className='the-arrow -left'>
                  <span className='shaft'></span>
                </span>
                  <span className='main'>
                      <span className='text'>
                        Know more about me
                      </span>
                    <span className='the-arrow -right'>
                      <span className='shaft'></span>
                    </span>
                  </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>

    </div>
    <div className="wrapper">
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
    </div>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
