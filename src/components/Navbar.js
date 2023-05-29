import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faSuitcase, faFile } from '@fortawesome/free-solid-svg-icons';
// import Lottie from 'lottie-react'
// import animationData from './lotties/aLogo.json';



function Navbar({ handlePageChange }) {

  return (

  <nav>

  <header className="fixed top-0 z-30 w-full p-1 bg-slate-800 shadow-xl flex items-center justify-end space-x-3 md:inline-flex ">
    

          {/* <!-- Navigation Links --> */}
          

              <a href="#home"
                onClick={() => handlePageChange('Home')}
                className="home px-4 py-2 font-semibold text-black hover:bg-gray-700"
                >
                <FontAwesomeIcon icon={faHome} color="#F3EEE8" />
                <span className="hidden group-hover:inline">HOME</span>
              </a>

              <a href="#aboutme"
                onClick={() => handlePageChange('AboutMe')}
                className="px-4 py-2 font-semibold text-black hover:bg-gray-700"
                activeclassname ="active">
                  <FontAwesomeIcon icon={faUser} color="#F3EEE8" />
              </a>

              <a href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className="px-4 py-2 font-semibold text-black hover:bg-gray-700"
                activeclassname ="active">
                  <FontAwesomeIcon icon={faSuitcase} color="#F3EEE8" />
              </a>

              <a href="#contact"
                onClick={() => handlePageChange('Contact')}
                className="px-4 py-2 font-semibold text-black hover:bg-gray-700"
                activeclassname ="active">
                  <FontAwesomeIcon icon={faEnvelope} color="#F3EEE8" />
              </a>

              <a href="#resume"
                onClick={() => handlePageChange('Resume')}
                className="px-4 py-2 font-semibold text-black hover:bg-gray-700"
                activeclassname ="active"> 
                <FontAwesomeIcon icon={faFile} color="#F3EEE8" />
              </a>

            {/* <div cclassName="menu-bar inline-flex md:hidden">
                            <button onclick="openMenu()" class="menubtn flex-none px-5 py-5">
                                <svg xmlns="http://www.w3.org/2000/svg"className="w-8 h-8" fill="none" viewBox="0 0 20 20"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 8h16M4 16h16" />
                                </svg>
                                <span class="sr-only">Open Menu</span>
                            </button>
                            <div className="menu-content">
                            <a href="#searchBar" className="px-3 py-1 font-semibold text-black">Event Search</a>
                            <a href="#eventList" className="px-3 py-1 font-semibold text-black">List of Events</a>
                            <a href="#contact-us" className="px-3 py-1 font-semibold text-black">Contact Us</a>
                            </div>
                        </div>  */}
        
      </header>
    </nav>
  );
}

export default Navbar;
