import React from 'react';
//import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow   } from '@fortawesome/free-brands-svg-icons'
//require('../App.css');

const iconStyle = {
  marginTop: "50px",
  marginRight: "30px",
  textAlign: "center",
};

export default function Header(props) {

    return (
      <div>
        <footer style={iconStyle}>
        <a style={iconStyle} className="footIcons" href="https://github.com/shooters00" target="_blank">
        <FontAwesomeIcon icon={faGithub} size={"3x"}/>
          </a>
          
          <a style={iconStyle} className="footIcons" href="https://github.com/shooters00" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size={"3x"}/>
          </a>

          <a style={iconStyle} className="footIcons" href="https://github.com/shooters00" target="_blank">
        <FontAwesomeIcon icon={faStackOverflow} size={"3x"}/>
          </a>
           

          <p>This page created as part of the Johns Hopkins University Full Stack Development Boot Camp.</p>
      </footer>
      </div>
    );
  }