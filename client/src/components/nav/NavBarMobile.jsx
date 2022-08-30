import { MdOutlineArticle, MdOutlineMessage } from "react-icons/md";
import { AiOutlineUser, AiOutlineArrowDown } from "react-icons/ai";

const NavBarMobile = () => {
  return (
    <header className="navbar-m">
      <nav>
        <div className="navbar-m__item">
          <MdOutlineArticle size="35px" />
          <a>PROJECTS</a>
        </div>
        <div className="navbar-m__item">
          <AiOutlineUser size="35px" />
          <a>ABOUT ME</a>
        </div>
        <div className="navbar-m__item">
          <MdOutlineMessage size="35px" />
          <a>CONTACT</a>
        </div>
        <div className="navbar-m__item">
          <AiOutlineArrowDown size="35px" />
          <a>RESUME</a>
        </div>
      </nav>
    </header>
  );
};

export default NavBarMobile;
