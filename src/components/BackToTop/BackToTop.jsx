import { useContext } from "react";
import "./BackToTop.css";
import { LightMode } from "../Context/Context";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { lightDark } = useContext(LightMode);

  return (
    <>
      <svg
        className="backToTop-icon"
        onClick={scrollToTop}
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fill={lightDark ? "black" : "white"}
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 512 266.77"
      >
        <path
          fillRule="nonzero"
          d="M493.12 263.55c4.3 4.28 11.3 4.3 15.62.05 4.33-4.26 4.35-11.19.05-15.47L263.83 3.22c-4.3-4.27-11.3-4.3-15.63-.04L3.21 248.13c-4.3 4.28-4.28 11.21.05 15.47 4.32 4.25 11.32 4.23 15.62-.05L255.99 26.48l237.13 237.07z"
        />
      </svg>
    </>
  );
};

export default BackToTop;
