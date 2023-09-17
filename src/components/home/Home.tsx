import React from "react";
import "./home.css";

import {FaArrowDown} from "react-icons/fa";

function Home() {

    const handleClickScroll = () => {
      const element = document.getElementById('skills-section');
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth'});
      }
    };
  
    const onDiplomaClick = () => {
      window.open("https://docdro.id/LGncWzW", "_blank", "noreferrer");;
    };


  return( 
  <div className="Home">
    <div className="about-me-wrapper">
      <div className="heading">
        <h2 className="about-me-heading">Gal Aviv | Full-Stack Developer</h2>
      </div>
      <p className="about-me-p">
        Hello! My name is Gal and I'm a Full-Stack Developer. <br/>
        I graduated as a talent in a <span className="diploma-link" onClick={onDiplomaClick}>Full-Stack Java course</span> on John Bryce. <br/>
        Welcome to my website!
      </p>
      <div className="button-container">
         <button onClick={handleClickScroll} className="btn btn-4 hover-border-6"><span>View More <FaArrowDown /></span></button>
      </div>
    </div>
    
  </div>
  );
}

export default Home;
