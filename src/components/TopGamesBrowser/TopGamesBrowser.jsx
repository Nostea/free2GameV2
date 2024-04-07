import "./TopGamesBrowser.css";
import CardVertical from "../CardVertical/CardVertical";
import { useEffect, useState } from "react";

const TopGamesBrowser = () => {
  const [topBrowser, setTopBrowser] = useState();
  useEffect(() => {
    fetch(
      "https://www.freetogame.com/api/games?platform=browser&sort-by=popularity"
    )
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
