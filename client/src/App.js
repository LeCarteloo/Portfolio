import Main from "./components/Main";
import NavBar from "./components/nav/NavBar";
import NavBarMobile from "./components/nav/NavBarMobile";
import ProjectPage from "./components/projects/ProjectPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Logo from "./assets/logo.svg";

function App() {
  const [loading, setLoading] = useState(true);
  const nodeRef = useRef();
  let location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <TransitionGroup>
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
            </Routes>
            <NavBarMobile />
          </div>
        )}
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
