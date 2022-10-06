import { useNavigate } from "react-router-dom";
import Svg from "../assets/404.svg";

const NotFound = () => {
  const navigate = useNavigate();

  const goPreviousPage = () => navigate(-1);

  return (
    <section className="not-found">
      <h1>I'm sorry</h1>
      <p>but this page never existed, or did it?</p>
      <p>Anyway please click one of the buttons below...</p>
      <div className="not-found__buttons">
        <a className="not-found__link not-found__link--filled" href="/">
          GO HOME
        </a>
        <button className="not-found__link btn" onClick={goPreviousPage}>
          PREVIOUS PAGE
        </button>
      </div>
      <span>
        SVG downloaded from&nbsp;
        <a
          href="https://storyset.com/illustration/404-error-with-a-cute-animal/rafiki"
          target="_blank"
          rel="noopener noreferrer"
        >
          storyset
        </a>
      </span>

      <img className="not-found__img" src={Svg} alt="404 error" />
    </section>
  );
};

export default NotFound;
