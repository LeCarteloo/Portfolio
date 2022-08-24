import MainStyle from "../styles/main.module.scss";
import FeaturedProject from "./projects/FeaturedProject";

import ProjectPhoto from "../assets/vu-mockup.png";

const Main = () => {
  // Placeholder data
  const projects = [
    {
      name: "Virtual University",
      photo: ProjectPhoto,
      technologies: [
        {
          name: "Javascript",
          icon: "faJavascript",
          type: "language",
        },
        {
          name: "Javascript",
          icon: "faJavascript",
          type: "language",
        },
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
      name: "Virtual University",
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
      <section className={MainStyle["welcome-section"]}>
        <div>
          <h3>Hi, my name is</h3>
          <h1>Filip Papiernik</h1>
          <h2>I create web applications</h2>
        </div>
        <button>Check my projects</button>
      </section>
      <section>
        <div className={MainStyle["header"]}>
          <span className={MainStyle["header-number"]}>01</span>
          <h1 className={MainStyle["header-title"]}>PROJECTS</h1>
        </div>
        <div className={MainStyle["projects"]}>
          <h2>FEATURED PROJECTS</h2>
          <div className={MainStyle["featured"]}>
            {projects.map((project) => (
              <FeaturedProject key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;

// __ inside element -- modifier
