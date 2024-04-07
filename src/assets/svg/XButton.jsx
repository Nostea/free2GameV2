import { useContext } from "react";
import { LightMode } from "../../components/Context/Context";

const XButton = () => {
  const { lightDark } = useContext(LightMode);
  return (
    <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.70711 4.29289C1.31658 3.90237 0.683417 3.90237 0.292893 4.29289C-0.0976311 4.68342 -0.0976311 5.31658 0.292893 5.70711L6.93272 12.3469L0.292893 18.9868C-0.0976311 19.3773 -0.0976311 20.0104 0.292893 20.401C0.683418 20.7915 1.31658 20.7915 1.70711 20.401L8.34693 13.7611L14.9868 20.401C15.3773 20.7915 16.0104 20.7915 16.401 20.401C16.7915 20.0104 16.7915 19.3773 16.401 18.9868L9.76114 12.3469L16.401 5.70711C16.7915 5.31658 16.7915 4.68342 16.401 4.29289C16.0104 3.90237 15.3773 3.90237 14.9868 4.29289L8.34693 10.9327L1.70711 4.29289Z"
        fill={lightDark ? "black" : "white"}
      />
    </svg>
  );
};

export default XButton;
