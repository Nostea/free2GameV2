import "./Searchbar.css";
import Logo from "./../../assets/svg/Logo";
import SearchIcon from "./../../assets/svg/SearchIcon";
import { useContext } from "react";
import { UserInput } from "../Context/Context";
import Lightmode from "../Lightmode/Lightmode";
import { Link } from "react-router-dom";
const Searchbar = ({ fold }) => {
  const { userInput, setUserInput } = useContext(UserInput);

  return (
    <>
      <section className="searchbar">
        <Link to="/">
          <div className={fold ? "slide" : ""}>
            <Logo />
            <h2 className="logo-text tracking-in-contract-bck">Free2Game</h2>
          </div>
        </Link>
        <div>
          <div className="user-input">
            <SearchIcon />
            <input
              onChange={(e) => setUserInput(e.target.value)}
              value={userInput}
              type="text"
              name="search"
              id="search"
              placeholder=""
              autoComplete="off"
            />
          </div>
          <Lightmode />
        </div>
      </section>
    </>
  );
};

export default Searchbar;
