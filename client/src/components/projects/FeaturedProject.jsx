import { Link } from "react-router-dom";

const FeaturedProject = ({ project }) => {
  return (
    <Link to={`projects/${project._id}`} state={project}>
      <figure className="fproject" tabIndex={1}>
        <div className="fproject__info">
          <h1 className="fproject__name">{project.name}</h1>
          <div className="fproject__stack">
            {project.technologies.map((tech) => (
              <img
                key={tech.name}
                className={"stack__icon"}
                src={`/icons/${tech.icon}.svg`}
                width="48px"
                height="48px"
                alt={tech.name}
              />
            ))}
          </div>
        </div>
        <img className="fproject__photo" src={project.photo} />
      </figure>
    </Link>
  );
};

export default FeaturedProject;
