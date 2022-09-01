import { useEffect, useState } from "react";
import "../../styles/nav.scss";
import { Link, useLocation } from "react-router-dom";

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

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

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
            <a href="/">LOGO</a>
          </div>
          <div className="navbar__items">
            <div className="navbar__item">
              <span>01</span>
              <Link to="/#projects">Projects</Link>
            </div>
            <div className="navbar__item">
              <span>02</span>
              <Link to="/#about">About me</Link>
            </div>
            <div className="navbar__item">
              <span>03</span>
              <Link to="/#contact">Contact</Link>
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
              <Link to="/" onClick={() => openMenu(false)}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/#projects" onClick={() => openMenu(false)}>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="/#about" onClick={() => openMenu(false)}>
                ABOUT ME
              </Link>
            </li>
            <li>
              <Link to="/#contact" onClick={() => openMenu(false)}>
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
