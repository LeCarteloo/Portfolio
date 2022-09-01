const SectionTitle = ({ color, title }) => {
  return (
    <h2 className="showcase__title" style={{ backgroundColor: color + "CC" }}>
      {title}
    </h2>
  );
};

export default SectionTitle;
