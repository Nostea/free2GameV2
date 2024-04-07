import "./Home.css";
import TopGamesPC from "./../../components/TopGamesPC/TopGamesPC";
import TopGamesBrowser from "./../../components/TopGamesBrowser/TopGamesBrowser";
import RecentlyComponent from "../../components/RecentlyComponent/RecentlyComponent";
import { Link } from "react-router-dom";
import {
  AllGamesFetch,
  GenreValue,
  PlatformValue,
  Recently,
  SearchedGames,
  SortByValue,
  UserInput,
} from "../../components/Context/Context";
import { useContext, useEffect } from "react";
import BackToTop from "../../components/BackToTop/BackToTop";

const Home = () => {
  const { allGames, setAllGames } = useContext(AllGamesFetch);
  const { recentlyFetch, setRecentlyFetch } = useContext(Recently);
  const { userInput, setUserInput } = useContext(UserInput);
  const { searchedGames, setSearchedGames } = useContext(SearchedGames);
  const { genreValue } = useContext(GenreValue);
  const { platformValue } = useContext(PlatformValue);
  const { sortByValue } = useContext(SortByValue);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const filtered = allGames.filter((item) =>
      item.title.toLowerCase().includes(userInput.toLowerCase())
    );
    setSearchedGames(filtered);
  }, [allGames, userInput]);

  useEffect(() => {
    fetch(
      `https://www.freetogame.com/api/games?${
        platformValue != "" ? "platform=" + platformValue : ""
      }&${genreValue != "" ? "category=" + genreValue : ""}&${
        sortByValue != "" ? "sort-by=" + sortByValue : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => setAllGames(data))
      .catch((err) => console.log("All Games Fetch", err));
  }, [platformValue, genreValue, sortByValue]);

  return (
    <>
      <section className="home">
        <section className="home_title">
          <h1>Find & track the best free-to-play games!</h1>
        </section>
        <div className="home-wrapper">
          <RecentlyComponent />
          <TopGamesPC />
          <TopGamesBrowser />
          <BackToTop />
        </div>
      </section>

      {userInput != "" ? (
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

export default Home;
