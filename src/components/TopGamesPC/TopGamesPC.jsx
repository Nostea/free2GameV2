import "./TopGamesPC.css";
import TopCard from "./../TopCard/TopCard";
import CardHorizontal from "./../CardHorizontal/CardHorizontal";
import { useEffect, useState } from "react";

const GAMES_RAPID_API_KEY = import.meta.env.VITE_GAMES_RAPID_API_KEY;

const TopGamesPC = () => {
    const [topGameData, setTopGameData] = useState([]);

    const baseUrl = "https://free-to-play-games-database.p.rapidapi.com/api/games?";
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": GAMES_RAPID_API_KEY,
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com"
        }
    };

    useEffect(() => {
        fetch(`${baseUrl}platform=pc&sort-by=popularity`, options)
            .then((res) => res.json())
            .then((apiData) => setTopGameData(apiData))
            .catch((error) => console.log("Error in TopGamesPC.jsx fetch", error));
    }, []);

    return (
        <section className="pc">
            <h2>Top 4 Games for PC in March 2024</h2>
            <div className="top-component-pc-flex">
                {topGameData ? (
                    topGameData.slice(0, 1).map((item, index) => (
                        <div
                            className="top-card"
                            key={index}
                            style={{
                                backgroundImage: `url(https://www.freetogame.com/g/475/genshin-impact-1.jpg)`,
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                            }}
                        >
                            <TopCard
                                gameTitle={item.title}
                                imgURL="https://www.freetogame.com/g/475/genshin-impact-1.jpg"
                                tags={item.genre}
                                id={`/details/${item.id}`}
                                platform={item.platform}
                            />
                        </div>
                    ))
                ) : (
                    <p>loading</p>
                )}

                <div className="top-games-pc-flex-vertCards">
                    {topGameData ? (
                        topGameData.slice(1, 4).map((item, index) => (
                            <div key={index}>
                                <CardHorizontal
                                    imgURL={item.thumbnail}
                                    gameTitle={item.title}
                                    tags={item.genre}
                                    rankIndex={index + 2}
                                    platform={item.platform}
                                    id={`/details/${item.id}`}
                                />
                            </div>
                        ))
                    ) : (
                        <p>loading</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TopGamesPC;
