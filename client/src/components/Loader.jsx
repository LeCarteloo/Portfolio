import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Logo from "./../assets/logo.svg";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const nodeRef = useRef();
  const location = useLocation();

  useEffect(() => {
    // document.body.style.overflowY = "hidden";
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
      //   document.body.style.overflowY = "auto";
      //   window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <TransitionGroup style={{ height: "100%" }}>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={1000}
        nodeRef={nodeRef}
        appear={true}
        in={loading}
      >
        {loading ? (
          <div className="loader">
            <img src={Logo} ref={nodeRef} className="fade" />
          </div>
        ) : (
          <></>
        )}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Loader;
