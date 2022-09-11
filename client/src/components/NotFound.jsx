import { Link, useLocation } from "react-router-dom";
import Svg from "../assets/404.svg";

const NotFound = () => {
  const location = useLocation();

  return (
    <section className="not-found">
      <h1>I'm sorry</h1>
      <p>but this page never existed, or did it?</p>
      <p>Anyway please click one of the buttons below...</p>
      <div className="not-found__buttons">
        <a className="not-found__link not-found__link--filled" href="/">
          GO HOME
        </a>
        <Link className="not-found__link" to="/projects/OutBox">
          PREVIOUS PAGE
        </Link>
      </div>
      <img className="not-found__img" src={Svg} alt="404 error" />
    </section>
  );
};

export default NotFound;
