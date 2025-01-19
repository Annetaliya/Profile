import React from "react";
import "./profileLinks.css";

const link = [
  {
    item: "https://landing-page-i6zw.vercel.app/",
    title: "Sample landing page",
  },
  {
    item: "https://659968189ed589e081611c57--jocular-valkyrie-82c7de.netlify.app/",
    title: "E-Commerce Website",
  },
  {
    item: "#home",
    title: "Sample Project",
  },
];

function ProfileLinks() {
  return (
    <div>
      <p className="intro">My Portfolio</p>
      <p className="intro-paragraph">
        I take pride in paying attention to the smallest details and making sure
        my work is pixel perfect. I am excited to bring my skills and experience
        to help businesses achieve their goals
      </p>
      {link.length !== 0
        ? link.map((links, index) => (
            <div key={index} className="proLink ">
              <a href={links.item} target="_blank" rel="noreferrer">
                <div className="thumbnail"></div>
              </a>
              <p>{links.title}</p>
            </div>
          ))
        : null}
    </div>
  );
}

export default ProfileLinks;
