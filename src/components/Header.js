import React from "react";
//import '../App.css';
import headshot from "../assets/images/headshot.jpg";
//const headshot = "/assets/images/headshot.jpg";
//require('../App.css');

const headStyle = {
//  marginTop: "50px",
//  marginRight: "30px",
  textAlign: "center",
  
};

export default function Header() {
  return (
    <div className="back-pic">
      <img style={headStyle} className="ed col" src={headshot} alt="Page author"></img>
      <div className="banner col">
      <h1 className="name col">Edward Fatula</h1>
      <h2 className="welcome col">Welcome to my portfolio!</h2>
      </div>
    </div>
  );
}
