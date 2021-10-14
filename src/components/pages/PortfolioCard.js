import React, { useEffect } from 'react';
import '../../App.css';
//require('../../App.css');

export default function PortfolioCard(props) {
  useEffect(() => {
    document.title = 'Portfolio';
  });
  return (
    <div className="card">
        <div key={props.title} className="card-header">
            <h3>{props.title}</h3>
            <div className="row">
              <div className="col">
                <h4><a href={props.repo}>Github Link</a></h4>
                <h4><a href={props.app}>App Link</a></h4>
              </div>
            </div>
            <a href={props.app} target="_blank">
                <img src={props.img} alt={props.alt} />
            </a>
        </div>
    </div>
  );
}
