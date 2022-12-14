import { FaGithub } from 'react-icons/fa';
import { AiOutlineProject } from 'react-icons/ai';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

const Project = ({ project }) => {
  return (
    <div className="project">
      <div className="project__header">
        <AiOutlineProject className="project__icon" />
        <div className="project__links">
          <a
            href={project.links.repo}
            className="project__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          {project.links.live && (
            <a
              href={project.links.live}
              className="project__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsArrowUpRightCircleFill />
            </a>
          )}
        </div>
      </div>
      <div className="project__body">
        <div>
          <h3 className="project__title">{project.name}</h3>
          <p className="project__desc">{project.desc}</p>
        </div>
        <span className="project__stack">
          {project.technologies.map((tech) => tech.name + ' ')} {' | '}
          {project.tools.map((tool) => tool.name + ' ')}
        </span>
      </div>
    </div>
  );
};

export default Project;
