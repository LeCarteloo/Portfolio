import { MdOutlineArticle, MdOutlineMessage } from "react-icons/md";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBarMobile = () => {
  return (
    <header className="navbar-m">
      <nav>
        <Link className="navbar-m__link" to="/">
          <AiOutlineHome size="25px" />
          HOME
        </Link>
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
        <a href="#!" className="navbar-m__link">
          <AiOutlineArrowDown size="25px" />
          RESUME
        </a>
      </nav>
    </header>
  );
};

export default NavBarMobile;
