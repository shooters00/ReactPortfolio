import React from 'react';
import '../App.css';
import headshot from '../assets/images/headshot.jpg';
//const headshot = "/assets/images/headshot.jpg";
//require('../App.css');


export default function Header() {

    return (
      <div className="row">
          <h1 className="col">Edward Fatula</h1>
          <section className="background">
              <div className="back-pic">
              </div>
              <img className="col" src={headshot} alt="Page author"></img>
              <h2>Welcome to my portfolio!</h2>
          </section>
      </div>
    );
  }