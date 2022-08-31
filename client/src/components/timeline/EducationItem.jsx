import { BsFillRecord2Fill } from "react-icons/bs";
import PropTypes from "prop-types";

const EducationItem = ({ year, name, desc, place }) => {
  return (
    <div className="step">
      <BsFillRecord2Fill className="step__icon" />
      <span className="step__time">{year}</span>
      <h2>{name}</h2>
      <p className="step__desc">{desc}</p>
      <h4>{place}</h4>
    </div>
  );
};

EducationItem.propTypes = {
  year: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  place: PropTypes.string,
};

export default EducationItem;
