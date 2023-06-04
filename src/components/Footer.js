import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  
    return (
      <div className="footer fixed bottom-0 z-30 w-full columns-1 bg-slate-800 flex items-center justify-center space-x-11">
        <a
            href="https://www.linkedin.com/in/anastasiya-rylova-6b8708141"
            target="_blank"
            rel="noreferrer"
            className="px-2 py-1"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#F3EEE8"
              className="anchor-icon"
            />
          </a>

        <a
            href="https://github.com/anryl050"
            target="_blank"
            rel="noreferrer"
            className="px-2 py-1"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#F3EEE8"
              className="anchor-icon"
            />
          </a>
       
        <a
            href="https://www.facebook.com"
            rel="noreferrer"
            target="_blank"
            className="px-2 py-1"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              color="#F3EEE8"
              className="anchor-icon"
            />
          </a>
       </div>
    );
  }
  
  export default Footer;
  

