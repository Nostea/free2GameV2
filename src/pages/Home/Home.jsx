import "./Home.css";
import TopGamesPC from "./../../components/TopGamesPC/TopGamesPC";
import TopGamesBrowser from "./../../components/TopGamesBrowser/TopGamesBrowser";
import RecentlyComponent from "../../components/RecentlyComponent/RecentlyComponent";
import { Link } from "react-router-dom";
import { AllGamesFetch, GenreValue, PlatformValue, Recently, SearchedGames, SortByValue, UserInput } from "../../components/Context/Context";
import { useContext, useEffect, useState } from "react";
import BackToTop from "../../components/BackToTop/BackToTop";

const GAMES_RAPID_API_KEY = import.meta.env.VITE_GAMES_RAPID_API_KEY;

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
            behavior: "smooth"
        });
    };

    const baseUrl = "https://free-to-play-games-database.p.rapidapi.com/api/games";
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": GAMES_RAPID_API_KEY,
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com"
        }
    };

    const parameters = [];
    if (platformValue != "") {
        parameters.push(`platform=${platformValue}`);
    }
    if (genreValue != "") {
        parameters.push(`category=${genreValue}`);
    }
    if (sortByValue != "") {
        parameters.push(`sort-by=${sortByValue}`);
    }
    const parameterString = parameters.join("&");

    useEffect(() => {
        fetch(`${baseUrl}${parameterString != "" ? `?${parameterString}` : ""}`, options)
            .then((res) => res.json())
            .then((data) => setAllGames(data))
            .catch((err) => console.log("All Games Fetch", err));
    }, [platformValue, genreValue, sortByValue]);

    useEffect(() => {
        const filtered = allGames.filter((item) => item.title.toLowerCase().includes(userInput.toLowerCase()));
        setSearchedGames(filtered);
    }, [allGames, userInput]);

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
                    {searchedGames.map((item, index) => (
                        <Link key={`searched-games-${index}`} to={`/details/${item.id}`}>
                            <div onClick={() => setUserInput("")} className="suggestion-items">
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
