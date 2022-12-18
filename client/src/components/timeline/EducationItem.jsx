import { BsFillRecord2Fill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const EducationItem = ({ year, name, desc, place }) => {
  return (
    <div className="step">
      <BsFillRecord2Fill className="step__icon" />
      <span className="step__time">{year}</span>
      <h4 className="step__title">{name}</h4>
      <p className="step__desc">{desc}</p>
      <h5>{place}</h5>
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
