import JSIcon from "../../assets/javascript.svg";

const FeaturedProject = ({ project }) => {
  return (
    <figure className="fproject">
      <div className="fproject__info">
        <h1 className="fproject__name">{project.name}</h1>
        <div className="fproject__stack">
          {project.technologies.map((tech, i) => (
            <img
              key={tech.name}
              className={"stack__icon"}
              src={JSIcon}
              width="48px"
              height="48px"
            />
          ))}
        </div>
        <div className="fproject__links">
          <a href="#">LIVE</a>
          <a href="#">GITHUB</a>
          <a href="#">PAGE</a>
        </div>
      </div>
      <img className="fproject__photo" src={project.photo} />
    </figure>
  );
};

export default FeaturedProject;
