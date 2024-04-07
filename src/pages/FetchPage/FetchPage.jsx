import "./FetchPage.css";
import { useContext, useEffect } from "react";
import {
  AllGamesFetch,
  GenreValue,
  PlatformValue,
  Recently,
  SortByValue,
} from "../../components/Context/Context";
import Loadingbar from "../../components/Loadingbar/Loadingbar";

const FetchPage = () => {
  const { allGames, setAllGames } = useContext(AllGamesFetch);
  const { platformValue } = useContext(PlatformValue);
  const { genreValue } = useContext(GenreValue);
  const { sortByValue } = useContext(SortByValue);
  const { recentlyFetch, setRecentlyFetch } = useContext(Recently);

  // *Recently Added games:

  useEffect(() => {
    fetch("https://www.freetogame.com/api/games?sort-by=release-date")
      .then((respo) => respo.json())
      .then((allData) => setRecentlyFetch(allData))
      .catch((err) => console.error("Fehler in Recently-Fetch", err));
  }, []);

  return (
    <section className="loading">
      <h1 className="tracking-in-contract-bck">Free2Game</h1>
      <Loadingbar />
    </section>
  );
};

export default FetchPage;
