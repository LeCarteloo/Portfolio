import { Link } from 'react-router-dom';
import { FaRegClock } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';

const FeaturedProject = ({ project }) => {
  return (
    <Link to={`projects/${project.repoName}`}>
      <figure className="fproject">
        <img
          className="fproject__photo"
          src={project.photo}
          alt={project.name}
        />
        <figcaption>
          <div className="fproject__title">
            <h3>{project.name}</h3>
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
          <p
            className="fproject__desc"
            dangerouslySetInnerHTML={{ __html: project.desc }}
          ></p>
          <p className="fproject__stack">
            {project.technologies.map((tech) => tech.name + ' ')} {' | '}
            {project.tools.map((tool) => tool.name + ' ')}
          </p>
        </figcaption>
      </figure>
    </Link>
  );
};

export default FeaturedProject;
