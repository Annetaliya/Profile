import React from "react";
import "./profileLinks.css";
import Restaurant from './Images/project1.PNG'
import Ecom from './Images/e-com.PNG';
import Landing from './Images/landingT.PNG';


const link = [
  {
    item: "https://restaurant-reservation-system-livid.vercel.app/",
    github: "#home",
    title: "Restaurant Reservation",
    photo: Restaurant
  },
  {
    item: "https://landing-page-i6zw.vercel.app/",
    github: "https://github.com/Annetaliya/Landing-Page",
    title: "Sample landing page",
    photo: Landing
  },
  {
    item: "https://659968189ed589e081611c57--jocular-valkyrie-82c7de.netlify.app/",
    github: "https://github.com/Annetaliya/React-ecommerce",
    title: "E-Commerce Website",
    photo: Ecom
  },
  
];

function ProfileLinks() {
  return (
    <div id="portfolio">
      <p className="intro">My Portfolio</p>
      <p className="intro-paragraph">
        I take pride in paying attention to the smallest details and making sure
        my work is pixel perfect. I am excited to bring my skills and experience
        to help businesses achieve their goals
      </p>
      <div className="profile-container">
        {link.length !== 0
          ? link.map((links, index) => (
              <div key={index} className="proLink">
                <img
                  src={links.photo}
                  alt="website"
                  loading="lazy"
                  height="200px"
                  style={{objectFit: 'cover'}}
                />

                <a href={links.item} target="_blank" rel="noreferrer">
                  <button className="btn1">Website</button>
                </a>
                <a href={links.github} target="_blank" rel="noreferrer">
                  <button className="btn2">Github</button>
                </a>
                <p className="links-title">{links.title}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default ProfileLinks;
