import { MdOutlineArticle, MdOutlineMessage } from "react-icons/md";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineArrowDown,
} from "react-icons/ai";

const NavBarMobile = () => {
  return (
    <header className="navbar-m">
      <nav>
        <a href="#" className="navbar-m__link">
          <AiOutlineHome size="25px" />
          HOME
        </a>
        <a href="#projects" className="navbar-m__link">
          <MdOutlineArticle size="25px" />
          PROJECTS
        </a>
        <a href="#about" className="navbar-m__link">
          <AiOutlineUser size="25px" />
          ABOUT ME
        </a>
        <a href="#contact" className="navbar-m__link">
          <MdOutlineMessage size="25px" />
          CONTACT
        </a>
        <a href="#!" className="navbar-m__link">
          <AiOutlineArrowDown size="25px" />
          RESUME
        </a>
      </nav>
    </header>
  );
};

export default NavBarMobile;
