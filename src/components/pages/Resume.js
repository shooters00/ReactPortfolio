import React, { useEffect } from 'react';
import '../../styles/Portfolio.css';

export default function Resume(props) {
  useEffect(() => {
    document.title = 'Resume';
  });
  return (
    <div>
      <h1>Resume</h1>
      <a href="./assets/files/2021 - Edward Fatula Resume Class.pdf" target="_blank">Resume</a>
      <p>
        Skills: 
      </p>
    </div>
  );
}
