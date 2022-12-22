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

  const links = [
    {
      icon: <MdOutlineArticle size="25px" />,
      label: 'Projects',
      path: '/#projects',
    },
    {
      icon: <AiOutlineUser size="25px" />,
      label: 'About me',
      path: '/#about',
    },
    {
      icon: <MdOutlineMessage size="25px" />,
      label: 'Contact',
      path: '/#contact',
    },
  ];

  return (
    <div className="navbar-m">
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

        {links.map((link) => (
          <Link
            className="navbar-m__link"
            to={link.path}
            style={{ textTransform: 'uppercase' }}
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
        <a href="/resume.pdf" className="navbar-m__link">
          <AiOutlineArrowDown size="25px" />
          RESUME
        </a>
      </nav>
    </div>
  );
};

export default NavBarMobile;
