import { useContext } from "react";
import { LightMode } from "../../components/Context/Context";
const GamesIcon = () => {
  const { lightDark } = useContext(LightMode);
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="21" width="22" height="14" rx="3" stroke={lightDark ? "black" : "white"} strokeWidth="2" strokeLinejoin="round" />
      <path
        d="M25 20V18.5C25 17.6716 25.6716 17 26.5 17V17C27.3284 17 28 16.3284 28 15.5V14"
        stroke={lightDark ? "black" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M21 26V30" stroke={lightDark ? "black" : "white"} strokeWidth="2" strokeLinecap="round" />
      <path d="M23 28L19 28" stroke={lightDark ? "black" : "white"} strokeWidth="2" strokeLinecap="round" />
      <circle cx="29" cy="30" r="1" fill={lightDark ? "black" : "white"} />
      <circle cx="31" cy="27" r="1" fill={lightDark ? "black" : "white"} />
    </svg>
  );
};

export default GamesIcon;
