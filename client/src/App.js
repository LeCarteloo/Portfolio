import Main from "./components/Main";
import NavBar from "./components/nav/NavBar";
import NavBarMobile from "./components/nav/NavBarMobile";
import ProjectPage from "./components/projects/ProjectPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
      </Router>
      <NavBarMobile />
    </div>
  );
}

export default App;
