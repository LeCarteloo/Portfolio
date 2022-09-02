import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { BiUser } from "react-icons/bi";

const FeaturedProject = ({ project }) => {
  return (
    <figure className="fproject">
      <Link to={`projects/${project._id}`} state={project}>
        <img className="fproject__photo" src={project.photo} />
        <figcaption>
          <div className="fproject__title">
            <h2>{project.name}</h2>
            <div className="fproject__info">
              <span>
                <BiUser />
                {project.team}
              </span>
              {project.time && (
                <span>
                  <FaRegClock />
                  {project.time}
                </span>
              )}
            </div>
          </div>
          <p className="fproject__desc">{project.desc}</p>
          <p className="fproject__stack">
            {project.technologies.map((tech) => tech.name + " ")} {" | "}
            {project.tools.map((tool) => tool.name + " ")}
          </p>
        </figcaption>
      </Link>
    </figure>
  );
};

export default FeaturedProject;
