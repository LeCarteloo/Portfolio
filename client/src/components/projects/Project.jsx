import { FaGithub } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Project = () => {
  return (
    <div className="project">
      <div className="project__links">
        <a className="project__links__link" href="#">
          <FaGithub />
        </a>
        <a href="#" className="project__links__link">
          <BsArrowUpRightCircleFill />
        </a>
      </div>
      <h2>Very long title of the project</h2>
      <p className="project__desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nulla
        dolores, nemo quam sed similique eaque nam aliquid!
      </p>
      <span className="project__stack">
        JavaScript React.js MongoDB Tailwind
      </span>
    </div>
  );
};

export default Project;
