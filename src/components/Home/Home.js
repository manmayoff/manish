import React from 'react';
import PropTypes from 'prop-types';
import './Home.css'
import { Link } from 'react-router-dom';


const Home = () => (
  <div>
    <div className='content-box'>
      Hello, fellow humans!
      <div class='container'>
        <ul>
          <li>
            <Link to="/details" style={{textDecoration: 'none'}}>
              <div class='animated-arrow'>
                <span class='the-arrow -left'>
                  <span class='shaft'></span>
                </span>
                  <span class='main'>
                      <span class='text'>
                        Know more about me
                      </span>
                    <span class='the-arrow -right'>
                      <span class='shaft'></span>
                    </span>
                  </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>

    </div>
    <div class="wrapper">
      {/* <h1>Hello, fellow humans!</h1> */}
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
    </div>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
