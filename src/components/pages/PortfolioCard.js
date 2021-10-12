import React, { useEffect } from 'react';
import '../../styles/Portfolio.css';

export default function PortfolioCard(props) {
  useEffect(() => {
    document.title = 'Portfolio';
  });
  return (
    <div className="card">
        <div class="card-header">
            <h3>{props.title}</h3>
            <a href={props.repo}>Github Link</a>
            <a href={props.app}>App Link</a>
            <a href={props.app} target="_blank">
                <img src={props.img} alt={props.alt} />
            </a>
        </div>
    </div>
  );
}
