import ProjectStyle from "../../styles/projects.module.scss";
import JSIcon from "../../assets/javascript.svg";

const FeaturedProject = ({ project }) => {
  return (
    <figure className={ProjectStyle["featured-project"]}>
      <div className={ProjectStyle["project-info"]}>
        <h1>{project.name}</h1>
        <div className={ProjectStyle["tech-stack"]}>
          {project.technologies.map((tech) => (
            <img
              className={ProjectStyle["tech-icon"]}
              src={JSIcon}
              width="48px"
              height="48px"
            />
          ))}
        </div>
        <div className={ProjectStyle["project-links"]}>
          <a href="#">LIVE</a>
          <a href="#">GITHUB</a>
          <a href="#">PAGE</a>
        </div>
      </div>
      <img className={ProjectStyle["cover-photo"]} src={project.photo} />
    </figure>
  );
};

export default FeaturedProject;
