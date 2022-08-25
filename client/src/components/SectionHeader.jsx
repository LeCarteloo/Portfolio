import PropTypes from "prop-types";

const SectionHeader = ({ number, title }) => {
  return (
    <div className="header">
      <span className="header__number">{number}</span>
      <h1 className="header__title">{title}</h1>
    </div>
  );
};

SectionHeader.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
};

export default SectionHeader;
