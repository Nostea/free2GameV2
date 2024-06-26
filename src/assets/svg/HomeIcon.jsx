import { useContext } from "react";
import { LightMode } from "../../components/Context/Context";

const HomeIcon = () => {
  const { lightDark } = useContext(LightMode);
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M36.2069 24.2786L26.1925 14.6648C25.8056 14.2933 25.1944 14.2933 24.8075 14.6648L14.7931 24.2786C14.1433 24.9024 14.5849 26 15.4856 26H16.5V35C16.5 36.1046 17.3954 37 18.5 37H22.5V31C22.5 29.8954 23.3954 29 24.5 29H26.5C27.6046 29 28.5 29.8954 28.5 31V37H32.5C33.6046 37 34.5 36.1046 34.5 35V26H35.5144C36.4151 26 36.8567 24.9024 36.2069 24.2786Z"
        stroke={lightDark ? "black" : "white"}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HomeIcon;
