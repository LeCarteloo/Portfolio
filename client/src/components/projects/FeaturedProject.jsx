import JSIcon from "../../assets/javascript.svg";

const FeaturedProject = ({ project }) => {
  return (
    <figure className="fproject" tabIndex={1}>
      <div className="fproject__info">
        <h1 className="fproject__name">{project.name}</h1>
        <div className="fproject__stack">
          {project.technologies.map((tech) => (
            <img
              key={tech.name}
              className={"stack__icon"}
              src={JSIcon}
              width="48px"
              height="48px"
            />
          ))}
        </div>
      </div>
      <img className="fproject__photo" src={project.photo} />
    </figure>
  );
};

export default FeaturedProject;
