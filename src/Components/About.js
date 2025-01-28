import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "./about.css";

function About() {
  return (
    <div className="about-container">
      <div>
        <a
          href="https://www.linkedin.com/in/annette-adhiambo-863889109?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSBEw7tsrQneyjatA3q6WtA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} color="#0077b5" />
        </a>
        <a href="https://github.com/Annetaliya"
        target="_blank"
        rel="noopener noreferrer"
        >
            <FaGithub size={30} color='#000'/>
        </a>

        
      </div>
      <div className="portfolio-intro">Welcome to my Portfolio website</div>
      <div className="skills-intro">
        I specialize in front-end engineering with proficiency in JavaScript,
        HTML and CSS. I am highly skilled in working with React, including state
        management and have experience working with bootstrap to create
        responsive and visually appealing websites.
      </div>
    </div>
  );
}
export default About;
