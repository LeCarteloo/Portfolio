import Main from "./components/Main";
import NavBar from "./components/nav/NavBar";
import NavBarMobile from "./components/nav/NavBarMobile";
import ProjectPage from "./components/projects/ProjectPage";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="app" style={{ overflowY: "scroll" }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects/:name" element={<ProjectPage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <NavBarMobile />
    </div>
  );
}

export default App;
