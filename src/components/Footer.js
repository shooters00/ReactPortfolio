import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow   } from '@fortawesome/free-brands-svg-icons'
//require('../App.css');

export default function Header(props) {

    return (
      <div>
        <footer>
        <a href="https://github.com/shooters00" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
          </a>
          
          <a href="https://github.com/shooters00" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a href="https://github.com/shooters00" target="_blank">
        <FontAwesomeIcon icon={faStackOverflow} />
          </a>
           

          <p>This page created as part of the Johns Hopkins University Full Stack Development Boot Camp.</p>
      </footer>
      </div>
    );
  }