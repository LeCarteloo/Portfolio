import { useState } from "react";
import "../../styles/nav.scss";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`navbar ${open ? "navbar--open" : ""}`}>
      <nav>
        <div className="navbar__logo">LOGO</div>
        <div className="navbar__items">
          <div className="navbar__item">
            <span>01</span>
            <a href="#projects">Projects</a>
          </div>
          <div className="navbar__item">
            <span>02</span>
            <a href="#about">About me</a>
          </div>
          <div className="navbar__item">
            <span>03</span>
            <a href="#contact">Contact</a>
          </div>
          <button type="button" className="navbar__resume">
            RESUME
          </button>
        </div>
        <button
          className={`navbar__hamburger ${
            open ? "navbar__hamburger--open" : ""
          }`}
          onClick={() => setOpen(!open)}
        >
          <div className="navbar__line"></div>
          <div className="navbar__line"></div>
          <div className=" navbar__line"></div>
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
