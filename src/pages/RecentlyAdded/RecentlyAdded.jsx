import "./RecentlyAdded.css";

import CardVertical from "../../components/CardVertical/CardVertical";
import Title from "../../components/Title/Title";
import recentlyImage from "/img/RecentGames.jpg";
import { useContext, useEffect, useState } from "react";
import {
  Recently,
  SearchedGames,
  UserInput,
  AllGamesFetch,
} from "../../components/Context/Context";
import BackToTop from "../../components/BackToTop/BackToTop";
import { Link } from "react-router-dom";

const RecentlyAdded = () => {
  const { recentlyFetch, setRecentlyFetch } = useContext(Recently);
  const [limit2, setLimit2] = useState(20);
  const { searchedGames, setSearchedGames } = useContext(SearchedGames);
  const { userInput, setUserInput } = useContext(UserInput);
  const { allGames, setAllGames } = useContext(AllGamesFetch);

  useEffect(() => {
    const filtered = allGames.filter((item) =>
      item.title.toLowerCase().includes(userInput.toLowerCase())
    );
    setSearchedGames(filtered);
  }, [allGames, userInput]);
  return (
    <>
      <section className="all-games">
        <Title backgroundImage={recentlyImage} title="Recently Added" />
        <article className="allgames-cards">
          {recentlyFetch ? (
            recentlyFetch
              .slice(0, limit2)
              .map((singleRecently, index) => (
                <CardVertical
                  key={index}
                  thumbnail={singleRecently.thumbnail}
                  alt={singleRecently.item}
                  gameTitle={singleRecently.title}
                  tags={singleRecently.genre}
                  platform={singleRecently.platform}
                  id={`/details/${singleRecently.id}`}
                />
              ))
          ) : (
            <p>loading...</p>
          )}
        </article>
        <div className="more-btn">
          <button
            onClick={() => setLimit2(limit2 + 20)}
            className="solid-button"
          >
            Load More
          </button>
          <button
            onClick={() => setLimit2(recentlyFetch.length)}
            className="solid-button"
          >
            Show All
          </button>
        </div>
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

export default RecentlyAdded;
