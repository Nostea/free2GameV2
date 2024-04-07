import "./TopGamesRank.css";

const TopGamesRank = ({ rank }) => {
  return (
    <div className="rank-container">
      <span className="rank-number">{rank}</span>
    </div>
  );
};

export default TopGamesRank;
