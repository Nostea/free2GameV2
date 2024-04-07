import "./FetchPage.css";
import { useContext, useEffect } from "react";
import { AllGamesFetch, GenreValue, PlatformValue, Recently, SortByValue } from "../../components/Context/Context";
import Loadingbar from "../../components/Loadingbar/Loadingbar";

const GAMES_RAPID_API_KEY = import.meta.env.VITE_GAMES_RAPID_API_KEY;

const FetchPage = () => {
    const { allGames, setAllGames } = useContext(AllGamesFetch);
    const { platformValue } = useContext(PlatformValue);
    const { genreValue } = useContext(GenreValue);
    const { sortByValue } = useContext(SortByValue);
    const { recentlyFetch, setRecentlyFetch } = useContext(Recently);

    // *Recently Added games:

    const baseUrl = "https://free-to-play-games-database.p.rapidapi.com/api/games?";
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": GAMES_RAPID_API_KEY,
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com"
        }
    };

    useEffect(() => {
        fetch(`${baseUrl}sort-by=release-date`, options)
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
