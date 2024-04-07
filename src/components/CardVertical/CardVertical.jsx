import { Link } from "react-router-dom";
import "./CardVertical.css";
import { LightMode } from "../Context/Context";

import { useContext, useState } from "react";
import { GenreValue, PlatformValue } from "../Context/Context";

const CardVertical = ({
  thumbnail,
  gameTitle,
  shortDescription,
  id,
  tags,
  platform,
}) => {
  const { genreValue, setGenreValue } = useContext(GenreValue);
  const { lightDark, setLightDark } = useContext(LightMode);

  return (
    <section className="card-vertical">
      <img src={thumbnail} alt={gameTitle} />
      <div className="card-content">
        <h3>{gameTitle}</h3>
        <p>{shortDescription}</p>
        <div className="fav">
          <Link to={id}>
            <button className="solid-button">Read more</button>
          </Link>
        </div>
        <div className="tags-flex">
          <Link to="/allgames">
            <p onClick={() => setGenreValue(tags)}>{tags}</p>
          </Link>
          <Link to="/allgames" className="card-tags">
            {platform === "PC (Windows)" ? (
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L0 2V7H7V1Z"
                  fill={`${lightDark ? "black" : "white"}`}
                />
                <path
                  d="M16 0L8 1V7H16V0Z"
                  fill={`${lightDark ? "black" : "white"}`}
                />
                <path
                  d="M7 8H0V13L7 14V8Z"
                  fill={`${lightDark ? "black" : "white"}`}
                />
                <path
                  d="M16 8H8V14L16 15V8Z"
                  fill={`${lightDark ? "black" : "white"}`}
                />
              </svg>
            ) : (
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1.00098"
                  width="16"
                  height="15"
                  rx="2"
                  stroke={`${lightDark ? "black" : "white"}`}
                />
                <path
                  d="M1 3.00098C1 1.89641 1.89543 1.00098 3 1.00098H15C16.1046 1.00098 17 1.89641 17 3.00098V4.00098H1V3.00098Z"
                  fill={`${lightDark ? "black" : "white"}`}
                  stroke={`${lightDark ? "black" : "white"}`}
                />
              </svg>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CardVertical;
