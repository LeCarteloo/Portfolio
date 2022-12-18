import { MdOutlineArticle, MdOutlineMessage } from 'react-icons/md';
import { AiOutlineUser, AiOutlineArrowDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import useIsMobile from '../../hooks/useIsMobile';

const NavBarMobile = () => {
  const isMobile = useIsMobile(480);

  if (!isMobile) {
    return;
  }

  return (
    <header className="navbar-m">
      <nav>
        <a className="navbar-m__link" href="/">
          <img
            src={Logo}
            width="18.75px"
            height="18.75px"
            style={{ margin: '3.125px' }}
            alt={'Page logo'}
          />
          HOME
        </a>
        <Link className="navbar-m__link" to="/#projects">
          <MdOutlineArticle size="25px" />
          PROJECTS
        </Link>
        <Link className="navbar-m__link" to="/#about">
          <AiOutlineUser size="25px" />
          ABOUT ME
        </Link>
        <Link className="navbar-m__link" to="/#contact">
          <MdOutlineMessage size="25px" />
          CONTACT
        </Link>
        <a href="/resume.pdf" className="navbar-m__link">
          <AiOutlineArrowDown size="25px" />
          RESUME
        </a>
      </nav>
    </header>
  );
};

export default NavBarMobile;
