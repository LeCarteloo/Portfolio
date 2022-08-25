// Components
import SectionHeader from "./SectionHeader";
import Project from "./projects/Project";
import FeaturedProject from "./projects/FeaturedProject";
// Stylesheets
import "../styles/main.scss";
import "../styles/projects.scss";
// Assets
import ProjectPhoto from "../assets/vu-mockup.png";
import AboutMe from "./sections/AboutMe";

const Main = () => {
  // Placeholder data
  const projects = [
    {
      name: "Virtual University",
      photo: ProjectPhoto,
      technologies: [
        {
          name: "Javascript1",
          icon: "faJavascript",
          type: "language",
        },
        {
          name: "Javascript2",
          icon: "faJavascript",
          type: "language",
        },
        {
          name: "Javascript3",
          icon: "faJavascript",
          type: "language",
        },
      ],
      links: {
        live: "#",
        repo: "#",
      },
      content: "empty",
      isFeatured: true,
    },
    {
      name: "Virtual University1",
      photo: ProjectPhoto,
      technologies: [
        {
          name: "Javascript",
          icon: "faJavascript",
          type: "language",
        },
      ],
      links: {
        live: "#",
        repo: "#",
      },
      content: "empty",
    },
    {
      name: "Virtual University2",
      photo: ProjectPhoto,
      technologies: [
        {
          name: "Javascript",
          icon: "faJavascript",
          type: "language",
        },
      ],
      links: {
        live: "#",
        repo: "#",
      },
      content: "empty",
      isFeatured: true,
    },
    {
      name: "Virtual University3",
      photo: ProjectPhoto,
      technologies: [
        {
          name: "Javascript",
          icon: "faJavascript",
          type: "language",
        },
      ],
      links: {
        live: "#",
        repo: "#",
      },
      content: "empty",
    },
  ];

  return (
    <main>
      {/* welcome section */}
      <section className="welcome">
        <div className="welcome__text">
          <h3>Hi, my name is</h3>
          <h1>Filip Papiernik</h1>
          <h2>I create web applications</h2>
        </div>
        <button className="welcome__button">Check my projects</button>
      </section>
      <section>
        <SectionHeader number={"01"} title={"PROJECTS"} />
        <div className="projects">
          <h2>FEATURED PROJECTS</h2>
          <div className="projects__featured">
            {projects.map((project) => (
              <FeaturedProject key={project.name} project={project} />
            ))}
          </div>
          <h2>OTHER PROJECTS</h2>
          <div className="projects__other">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
          <div className="more">
            <button className="more__button">SHOW MORE</button>
          </div>
        </div>
      </section>
      <AboutMe />
    </main>
  );
};

export default Main;

// __ inside element -- modifier
