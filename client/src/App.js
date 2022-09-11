import Main from "./components/Main";
import NavBar from "./components/nav/NavBar";
import NavBarMobile from "./components/nav/NavBarMobile";
import ProjectPage from "./components/projects/ProjectPage";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Logo from "./assets/logo.svg";
import NotFound from "./components/NotFound";

function App() {
  const [loading, setLoading] = useState(true);
  const nodeRef = useRef();
  let location = useLocation();

  useEffect(() => {
    if (location.pathname.toString() !== "/404") {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
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
          <div className="loader" ref={nodeRef}>
            <img src={Logo} />
          </div>
        ) : (
          <div className="app">
            <NavBar />
            <Routes location={location}>
              <Route path="/" element={<Main />} />
              <Route path="/projects/:name" element={<ProjectPage />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
            <NavBarMobile />
          </div>
        )}
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
