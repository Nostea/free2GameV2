import { useContext } from "react";
import { LightMode } from "../../components/Context/Context";

const CheckboxEmpty = () => {
  const { lightDark } = useContext(LightMode);
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="15" height="15" stroke={lightDark ? "black" : "white"} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
};

export default CheckboxEmpty;
