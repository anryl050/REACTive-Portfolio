import React from 'react';
// import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';


function Footer() {
    // const [showNav, setShowNav] = useState(false);
  
    return (
      <div className="footer">
        <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>

        <a
            href="https://github.com/anryl050"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
       
        <a
            href="https://www.facebook.com"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
       </div>
    );
  }
  
  export default Footer;
  