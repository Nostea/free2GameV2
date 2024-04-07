import { useContext } from "react";
import { LightMode } from "../../components/Context/Context";

const ArrowIcon = ({ setIsOpen, className }) => {
  const { lightDark } = useContext(LightMode);
  return (
    <svg className={className} onClick={setIsOpen} width="12" height="27" viewBox="0 0 12 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 7L6 22L11 7" stroke={lightDark ? "black" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ArrowIcon;
