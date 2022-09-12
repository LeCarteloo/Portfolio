import SectionHeader from "../SectionHeader";
import Project from "../projects/Project";
import FeaturedProject from "../projects/FeaturedProject";

const Projects = ({ featuredProjects, otherProjects }) => {
  return (
    <section id="projects">
      <SectionHeader number={"01"} title={"PROJECTS"} />
      <div className="projects">
        <h2 className="projects__subtitle">FEATURED PROJECTS</h2>
        <div className="projects__featured">
          {featuredProjects.map((project) => (
            <FeaturedProject key={project._id} project={project} />
          ))}
        </div>
        <h2 className="projects__subtitle">OTHER PROJECTS</h2>
        <div className="projects__other">
          {otherProjects.map((project) => (
            <Project key={project._id} project={project} />
          ))}
        </div>
        {/* <div className="more">
            <button className="more__button">SHOW MORE</button>
          </div> */}
      </div>
    </section>
  );
};

export default Projects;
