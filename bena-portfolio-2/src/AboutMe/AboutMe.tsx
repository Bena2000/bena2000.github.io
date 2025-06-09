import React from 'react';
import './App.css';
import ScrollAnimation from "react-animate-on-scroll";

function AboutMe() {
  return (
    <div>
        AboutMe
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
    </div>
  )
}

export default AboutMe;
