import React, { useState } from "react";
import { Link } from 'react-router-dom';

import '../App.css';

import iconGitHub from "../images/icon-github.png";
import iconEmail from "../images/icon-email.png";
import iconLinkedIn from "../images/icon-linkedin.png";


function Header() {

    const [visibility, setVisibility] = useState(false);

    function showInfo() {
        setVisibility(!visibility);
    }
    return (

    <header id="header" class="header">
        <div class="overlay">
            <div class="container description">
                  <h1 class="greetings">Hi there,</h1>
                  <p class="title">Welcome to my website!</p>
                <Link class="btn seemore" to="/About">See More</Link>
                
                <div class="icon-box">
                  <div class="rounded icon-container">
                      <a href="https://github.com/shailendrarijal" target="_blank"><img class="icon" src={iconGitHub} alt="github link" /> </a>
                  </div>
              
                  <div class="rounded icon-container">
                      <a href="https://www.linkedin.com/in/shailendrarijal/" target="_blank"><img class="icon" src={iconLinkedIn} alt="Linkedin link" /> </a>
                  </div>
                
                  <div class="icon-container rounded email-button">
                  <Link id="btn-email" to="/Contact"><img id="email-icon" class="icon" src={iconEmail} alt="email link" /></Link>
                  </div>
              </div>
            </div>
        </div>
      </header>
    
    );
  };

  export default Header;
  export {Link};