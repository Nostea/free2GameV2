import "./Title.css";
const Title = ({ backgroundImage,title }) => {
  return (
    <section
      className="allGames-title"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}>
        <h1>{title}</h1>
      </section>
  );
};

export default Title;
