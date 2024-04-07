import "./TopGamesBrowser.css";
import CardVertical from "../CardVertical/CardVertical";
import { useEffect, useState } from "react";

const GAMES_RAPID_API_KEY = import.meta.env.VITE_GAMES_RAPID_API_KEY;

const TopGamesBrowser = () => {
    const [topBrowser, setTopBrowser] = useState();

    const baseUrl = "https://free-to-play-games-database.p.rapidapi.com/api/games?";
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": GAMES_RAPID_API_KEY,
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com"
        }
    };

    useEffect(() => {
        fetch(`${baseUrl}platform=browser&sort-by=popularity`, options)
            .then((respo) => respo.json())
            .then((allData) => setTopBrowser(allData))
            .catch((err) => console.error("Fehler in top-Browser-Fetch", err));
    }, []);

    return (
        <section className="top-games-browser">
            <h2>Top Games Browser</h2>
            <article className="top-games-browser-grid">
                {topBrowser ? (
                    topBrowser.slice(0, 4).map((singleTopBrow, index) => (
                        <div key={index}>
                            <CardVertical
                                thumbnail={singleTopBrow.thumbnail}
                                alt={singleTopBrow.item}
                                gameTitle={singleTopBrow.title}
                                tags={singleTopBrow.genre}
                                platform={singleTopBrow.platform}
                                id={`/details/${singleTopBrow.id}`}
                            />
                        </div>
                    ))
                ) : (
                    <p>loading...</p>
                )}
            </article>
        </section>
    );
};

export default TopGamesBrowser;
