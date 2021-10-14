import React, { useEffect } from 'react';
import '../../App.css';
//require('../../App.css');

export default function About(props) {
    useEffect(() => {
      document.title = 'About';
    });
  return (
    <div>
      <h2>About Me</h2>
      <section className="info-about" id="info-about">
        <p>Detail-driven engineer with over 20 years of experience as a project, program, and technical lead.  
            Engineering experience encompassing systems architecture, requirements analysis, design, integration, 
            test, and operations.  Expert in developing, defining, executing, and managing project schedules, 
            team goals, system requirements, and metrics, as well as, identifying and mitigating risks.  Proven 
            ability to create and foster working relationships with internal and external stakeholders and 
            customers.  Highly successful leader of process improvement and organizational change.</p>
      </section>
    </div>
  );
}
