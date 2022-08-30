import { useEffect, useState } from "react";
import "../../styles/nav.scss";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastScrollPos = 0;
    window.onscroll = () => {
      const y = window.scrollY;
      if (y <= lastScrollPos) {
        setShow(true);
      } else {
        setShow(false);
      }
      lastScrollPos = y;
    };
  }, []);

  return (
    <header
      className={`navbar ${open ? "navbar--open" : ""} ${
        show ? "navbar--show" : ""
      }`}
    >
      <nav>
        <div className="navbar__logo">
          <a href="#">LOGO</a>
        </div>
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
            Resume
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
