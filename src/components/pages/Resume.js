import React, { useEffect } from 'react';
//import '../../App.css';
//require('../../App.css');

export default function Resume(props) {
  useEffect(() => {
    document.title = 'Resume';
  });
  return (
    <div className="row resumeParent">
      <h1>Resume</h1>
      <a className="resume" href="./assets/files/2021 - Edward Fatula Resume Class.pdf" target="_blank">Downloadable Resume</a>
      <ul className="skills">Top Proficiencies:
        <li className="">Javascript</li>
        <li>React</li>
        <li>Node</li>
        <li className="col">Mongo</li>
        <li>Express</li>
        <li>Html/CSS/Bootstrap</li>
        <li>SQL</li>
      </ul>
    </div>
  );
}
