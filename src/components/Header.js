import React from 'react';
import '../styles/Header.css';
import headshot from '../images/headshot.jpg';

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