import React, { useState } from "react";
import "./navBar.css";

const nav = ["Home", "About", "Portfolio", "Contact"];

const NavBar = () => {
  const [activeIndex, setAciveIndex] = useState(0);

  return (
    <div>
      <ul className="nav-items">
        {nav.map((item, index) => (
          <li
            key={index}
            className={`list-items ${activeIndex === index ? "active" : ""}`}
            onClick={() => setAciveIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NavBar;
