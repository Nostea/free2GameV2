import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Burgermenu from "../../assets/svg/Burgermenu";
import { useContext, useState } from "react";
import HomeIcon from "../../assets/svg/HomeIcon";
import ExitButton from "../../assets/svg/ExitButton";
import GamesIcon from "../../assets/svg/GamesIcon";
import RecentlyIcon from "../../assets/svg/RecentlyIcon";
import Searchbar from "../Searchbar/Searchbar";
import { LightMode } from "../Context/Context";

const Navbar = () => {
  // global lightdark mode state

  const [fold, setFold] = useState(false);
  const [mobileShow, setMobileShow] = useState(false);

  return (
    <>
      <Searchbar fold={fold} />
      <section className="navbar">
        <div className={`burger ${fold ? "hide" : "show"}`}>
          <Burgermenu setFold={() => setFold((fold) => !fold)} />
        </div>
        <div className={`exit ${fold ? "show" : "hide"}`}>
          <ExitButton setFold={() => setFold((fold) => !fold)} />
        </div>
        <nav>
          <NavLink to="/">
            <p className="navleiste">
              <HomeIcon />
              <span className={fold ? "show" : "hide"}>Home</span>
            </p>
          </NavLink>
          <NavLink to="/allgames">
            <p className="navleiste">
              <GamesIcon />
              <span className={fold ? "show" : "hide"}>All Games</span>
            </p>
          </NavLink>
          <NavLink to="/recently">
            <p className="navleiste">
              <RecentlyIcon />
              <span className={fold ? "show" : "hide"}>Recently Added</span>
            </p>
          </NavLink>
        </nav>
      </section>
      <section className="mobile-nav">
        <div className="burger">
          <Burgermenu setFold={() => setMobileShow(!mobileShow)} />
        </div>
        <div
          className={`mobile-menu ${mobileShow ? "mobileHide" : "mobileShow"}`}
        >
          <NavLink to="/">
            <p className="navleiste">
              <HomeIcon />
              Home
            </p>
          </NavLink>
          <NavLink to="/allgames">
            <p className="navleiste">
              <GamesIcon />
              All Games
            </p>
          </NavLink>
          <NavLink to="/recently">
            <p className="navleiste">
              <RecentlyIcon />
              Recently Added
            </p>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Navbar;
