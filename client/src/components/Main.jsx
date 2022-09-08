// Stylesheets
import "../styles/main.scss";
import "../styles/projects.scss";
// Assets
import AboutMe from "./sections/AboutMe";
// JSON db
import projects from "../db/projects.json";
import users from "../db/users.json";
import { Link } from "react-router-dom";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Hero from "./sections/Hero";

const Main = () => {
  const owner = users.find((user) => user.isOwner === true);

  const featuredProjects = projects.filter(
    (project) => project.isFeatured === true && project._id !== 0
  );
  const otherProjects = projects.filter(
    (project) => project.isFeatured === false
  );

  return (
    <main>
      <Hero />
      <Projects
        featuredProjects={featuredProjects}
        otherProjects={otherProjects}
      />
      <AboutMe
        experience={owner.experience}
        education={owner.education}
        technologies={owner.technologies}
      />
      <Contact owner={owner} />
      <footer>
        <p>
          Designed and build by <b>Filip Papiernik</b>
        </p>
        <p>
          See creation process of this website
          <Link to="/projects/Portfolio">
            <u>here</u>
          </Link>
        </p>
      </footer>
    </main>
  );
};

export default Main;
