import { useEffect, useState } from 'react';
import '../../styles/nav.scss';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import useIsMobile from '../../hooks/useIsMobile';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState(756);
  const location = useLocation();
  const isMobile = useIsMobile();

  const handleMenu = (state) => {
    setOpen(state);
    setShow(true);

    if (state) {
      document.body.style.overflowY = 'hidden';
      // Updating scroll position (after overflow changes, scroll pos also changes)
      setScrollPos(window.scrollY);

      return;
    }

    document.body.style.overflowY = 'auto';
    setScrollPos(window.scrollY);
  };

  // Handling display of top navbar
  const onScroll = () => {
    if (window.scrollY > scrollPos) {
      setShow(false);
    } else {
      setShow(true);
    }
    setScrollPos(window.scrollY);
  };

  // Closing full screen menu
  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768 || e.currentTarget.innerWidth < 480) {
      handleMenu(false);
      document.body.style.overflowY = 'auto';
    }
  };

  // Watching width of window only when menu is open
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', onResize);
    }
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [open === true]);

  // Link element scrolls in to view
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  // Adding scroll listener
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', onScroll);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [scrollPos]);

  console.log(open, isMobile);

  return (
    <>
      <header className={`navbar ${show ? 'navbar--show' : ''}`}>
        <nav className="navbar__nav">
          <div className="navbar__logo">
            <a href="/">
              <img src={Logo} width="30px" height="30px" alt={'Logo'} />
            </a>
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
            <a href="/resume.pdf" className="navbar__resume">
              Resume
            </a>
          </div>
          <button
            className={`navbar__hamburger ${
              open ? 'navbar__hamburger--open' : ''
            }`}
            onClick={() => handleMenu(!open)}
          >
            <div className="navbar__line"></div>
            <div className="navbar__line"></div>
            <div className=" navbar__line"></div>
          </button>
        </nav>
      </header>
      {isMobile && open ? (
        <div
          aria-hidden={!open}
          tabIndex={open ? 1 : -1}
          className={`menu ${open ? 'menu--open' : ''}`}
        >
          <nav className="menu__nav">
            <ul>
              <li>
                <Link
                  to="/#projects"
                  onClick={() => handleMenu(false)}
                  tabIndex={open ? 1 : -1}
                >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  onClick={() => handleMenu(false)}
                  tabIndex={open ? 1 : -1}
                >
                  ABOUT ME
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  onClick={() => handleMenu(false)}
                  tabIndex={open ? 1 : -1}
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  className="menu__resume"
                  tabIndex={open ? 1 : -1}
                >
                  RESUME
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </>
  );
};

export default NavBar;
