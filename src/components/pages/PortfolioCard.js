import React, { useEffect } from "react";
//import '../../App.css';
//require('../../App.css');

const cardStyle = {
  //marginTop: "40px",
  //maxWidth: "200px",
};

const projectStyle = {
  //   maxWidth: "750px",
};

export default function PortfolioCard(props) {
  useEffect(() => {
    document.title = "Portfolio";
  });
  return (
    <div className="project">
      <div style={cardStyle} className="card">
        <div key={props.title}>
          <h3 className="card-header">{props.title}</h3>
        </div>
        <div className="card-body">
          <h4>
            <a href={props.repo}>Github Link</a>
          </h4>
          <h4>
            <a href={props.app}>App Link</a>
          </h4>
          <a className="row projectImage" href={props.app} target="_blank">
            <img style={projectStyle} src={props.img} alt={props.alt} />
          </a>
        </div>
      </div>
    </div>
  );
}
