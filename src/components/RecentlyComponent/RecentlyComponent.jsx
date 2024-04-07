import "./RecentlyComponent.css";
import CardVertical from "./../CardVertical/CardVertical";
import { Recently } from "../../components/Context/Context";
import { useContext } from "react";
const RecentlyComponent = () => {
  const { recentlyFetch, setRecentlyFetch } = useContext(Recently);

  return (
    <section className="recently-component">
      <h2>Recently Added</h2>
      <div className="recently-component-content">
        {recentlyFetch ? (
          recentlyFetch
            .slice(0, 4)
            .map((singleRecently, index) => (
              <CardVertical
                key={index}
                thumbnail={singleRecently.thumbnail}
                alt={singleRecently.item}
                gameTitle={singleRecently.title}
                shortDescription={
                  singleRecently.short_description.length > 60
                    ? singleRecently.short_description.substring(0, 60 - 3) +
                      "..."
                    : singleRecently.short_description
                }
                tags={singleRecently.genre}
                platform={singleRecently.platform}
                id={`/details/${singleRecently.id}`}
                fav={() => setIsFav(!isFav)}
              />
            ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    </section>
  );
};

export default RecentlyComponent;
