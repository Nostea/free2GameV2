import Title from "../../components/Title/Title";
import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "./Details.css";
import BackToTop from "../../components/BackToTop/BackToTop";
import {
  Recently,
  SearchedGames,
  UserInput,
  AllGamesFetch,
} from "../../components/Context/Context";

const Details = () => {
  // ---useState
  const [singleGame, setSingleGame] = useState(null);
  const { searchedGames, setSearchedGames } = useContext(SearchedGames);
  const { userInput, setUserInput } = useContext(UserInput);
  const { allGames, setAllGames } = useContext(AllGamesFetch);
  // --- get id by useParams
  const { id } = useParams();

  // ---fetch
  useEffect(() => {
    fetch(`https://www.freetogame.com/api/game?id=${id}`)
      .then((res) => res.json())
      .then((fetchData) => setSingleGame(fetchData))
      .catch((err) => console.error("fetch error at detailpage", err));
  }, []);
  // ---- filter
  useEffect(() => {
    const filtered = allGames.filter((item) =>
      item.title.toLowerCase().includes(userInput.toLowerCase())
    );
    setSearchedGames(filtered);
  }, [allGames, userInput]);

  // ---link to game
  const linkToGame = () => {
    window.open(`${singleGame.game_url}`, "_blank");
  };

  // ========== RENDERING ==========
  return (
    <>
      <section className="details">
        {singleGame ? (
          <>
            <Title backgroundImage={singleGame.screenshots[0]?.image} />

            <h2>{singleGame.title}</h2>
            <div className="details__game-info">
              <div className="detail__left">
                <img src={singleGame.thumbnail} alt="" />
                <h3>Platform: {singleGame.platform}</h3>
                <p className="card-tags">{singleGame.genre}</p>
                <button className="solid-button" onClick={linkToGame}>
                  PLAY NOW
                </button>
              </div>
              <div className="details__right">
                <h3>About</h3>

                {singleGame.description.split("\r\n\r\n").map((taco, index) => (
                  <p key={index} className="details__description--paragraph">
                    {taco}
                  </p>
                ))}
              </div>
            </div>
            <div className="details__images">
              {singleGame.screenshots.slice(1).map((item, index) => (
                <img key={index} src={item.image} alt="" />
              ))}
            </div>
            <div className="details__add-info">
              <div className="details__add-info--left">
                <h3>Additional Information</h3>
                <p>
                  Please note this free-to-play game may or may not offer
                  optional in-game purchases.
                </p>
                <div className="details__add-info--left--container">
                  <div>
                    <h4>Developer</h4>
                    <h4>Publisher</h4>
                    <h4>Release Date</h4>
                  </div>
                  <div>
                    <p>{singleGame.developer}</p>
                    <p>{singleGame.publisher}</p>
                    <p>{singleGame.release_date}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3>Minimum System Requirements</h3>
                <h3>({singleGame.platform})</h3>
                {/* --- platform turnery */}
                {singleGame.platform == "Windows" ? (
                  <div className="details__add-info--right">
                    <div>
                      <h4>OS</h4>
                      <p>{singleGame.minimum_system_requirements.os}</p>
                    </div>
                    <div>
                      <h4>Memory</h4>
                      <p>{singleGame.minimum_system_requirements.memory}</p>
                    </div>
                    <div>
                      <h4>Storage</h4>
                      <p>{singleGame.minimum_system_requirements.storage}</p>
                    </div>

                    <div>
                      <h4>Processor</h4>
                      <p>{singleGame.minimum_system_requirements.processor}</p>
                    </div>
                    <div>
                      <h4>Graphics</h4>
                      <p>{singleGame.minimum_system_requirements.graphics}</p>
                    </div>
                    <div>
                      <h4>Additional Notes</h4>
                      <p>Specifications may change during development</p>
                    </div>
                  </div>
                ) : (
                  <h3></h3>
                )}
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
        <BackToTop />
      </section>
      {userInput != "" && searchedGames ? (
        <section className="suggestion">
          {searchedGames.map((item) => (
            <Link to={`/details/${item.id}`}>
              <div
                onClick={() => setUserInput("")}
                className="suggestion-items"
              >
                <img src={item.thumbnail} alt="" />
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </section>
      ) : (
        " "
      )}
    </>
  );
};

export default Details;
