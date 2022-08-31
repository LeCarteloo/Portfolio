import { useEffect, useState } from "react";
import "../../styles/nav.scss";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  const openMenu = (state) => {
    setOpen(state);
    setShow(true);

    if (state) {
      document.body.style.overflowY = "hidden";
      return;
    }

    document.body.style.overflowY = "auto";
  };

  const onScroll = () => {
    if (window.scrollY > scrollPos) {
      setShow(false);
    } else {
      setShow(true);
    }
    setScrollPos(window.scrollY);
  };

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768 || e.currentTarget.innerWidth < 480) {
      setOpen(false);
      document.body.style.overflowY = "auto";
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", onResize);
    }
    console.log("resize");
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [open === true]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollPos]);

  return (
    <>
      <header className={`navbar ${show ? "navbar--show" : ""}`}>
        <nav className="navbar__nav">
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
            onClick={() => openMenu(!open)}
          >
            <div className="navbar__line"></div>
            <div className="navbar__line"></div>
            <div className=" navbar__line"></div>
          </button>
        </nav>
      </header>
      <header className={`menu ${open ? "menu--open" : ""}`}>
        <nav className="menu__nav">
          <ul>
            <li>
              <a href="#" onClick={() => openMenu(false)}>
                HOME
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => openMenu(false)}>
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => openMenu(false)}>
                ABOUT ME
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => openMenu(false)}>
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
