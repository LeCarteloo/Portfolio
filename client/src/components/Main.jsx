import MainStyle from "../styles/main.module.scss";

const Main = () => {
  return (
    <>
      {/* welcome section */}
      <section className={MainStyle["welcome-section"]}>
        <h2 className={MainStyle["h2"]}>Elo</h2>
      </section>
    </>
  );
};

export default Main;

// __ inside element -- modifier
