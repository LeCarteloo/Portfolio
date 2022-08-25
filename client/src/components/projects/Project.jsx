import ProjectStyle from "../../styles/projects.module.scss";

const Project = () => {
  return (
    <div className={ProjectStyle["other-project"]}>
      <div>
        <a href="#">GH</a>
        <a href="#">OP</a>
      </div>
      <h2>Very long title of the project</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nulla
        dolores, nemo quam sed similique eaque nam aliquid!
      </p>
      <span>JavaScript React.js MongoDB Tailwind</span>
    </div>
  );
};

export default Project;
