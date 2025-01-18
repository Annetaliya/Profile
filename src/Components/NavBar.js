import React, { useState } from "react";
import "./navBar.css";

const nav = ["Home", "About", "Portfolio", "Contact"];

const NavBar = () => {
  const [activeIndex, setAciveIndex] = useState(0);

  return (
    <div>
        <div className="nav-container">
            <div className="logo">
                <p>AA</p>
            </div>
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
    </div>
  );
};
export default NavBar;
