import React, { useState } from "react";
import { Link } from 'react-scroll';
import "./navBar.css";

const nav = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Portfolio", to: "portfolio" },
  { name: "Contact", to: "contact" },
];

const NavBar = () => {
  const [activeIndex, setAciveIndex] = useState(0);
  const [showMenu, setShowMenu] =  useState(false);

  const handleShow = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="logo">
          <p>AA</p>
        </div>
        <ul className={`nav-items ${showMenu ? 'open' : ''}`}>
          {nav.map((item, index) => (
            <li
              key={index}
              className={`list-items ${activeIndex === index ? "active" : ""}`}
              onClick={() => setAciveIndex(index)}
            >
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70} 
                spy={true}
              >
               {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="menu" onClick={handleShow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
