import Main from "./components/Main";
import NavBar from "./components/nav/NavBar";
import NavBarMobile from "./components/nav/NavBarMobile";
import ProjectPage from "./components/projects/ProjectPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects/:name" element={<ProjectPage />} />
        </Routes>
        <NavBarMobile />
      </div>
    </Router>
  );
}

export default App;
