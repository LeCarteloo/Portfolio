import { BsFillRecord2Fill } from "react-icons/bs";
import PropTypes from "prop-types";

const ExperienceItem = ({ year, name, position, taskList }) => {
  return (
    <div className="step">
      <BsFillRecord2Fill className="step__icon" />
      <span className="step__time">{year}</span>
      <h2>{name}</h2>
      <p className="step__desc">{position}</p>
      <ul className="step__list">
        {taskList.map((task, i) => (
          <li key={`task-${i}`}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

ExperienceItem.propTypes = {
  year: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  place: PropTypes.array,
};

export default ExperienceItem;
