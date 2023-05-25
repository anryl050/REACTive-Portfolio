import React from 'react';
// import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faFile
} from '@fortawesome/free-solid-svg-icons';


function Navbar({ currentPage, handlePageChange }) {
  

  return (


    <nav>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
           <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#aboutme"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
           <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
           <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
         <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"

          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
        </a>
      </li>
    </ul> 
    </nav>
  );
}

export default Navbar;
