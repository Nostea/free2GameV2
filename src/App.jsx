import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllGames from "./pages/AllGames/AllGames";
import RecentlyAdded from "./pages/RecentlyAdded/RecentlyAdded";
import Details from "./pages/Details/Details";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import { useEffect, useState } from "react";
import {
  GenreValue,
  PlatformValue,
  SortByValue,
  UserInput,
  LightMode,
  Recently,
  AllGamesFetch,
  SearchedGames,
} from "./components/Context/Context";
import FetchPage from "./pages/FetchPage/FetchPage";

function App() {
  const [platformValue, setPlatformValue] = useState("");
  const [genreValue, setGenreValue] = useState("");
  const [sortByValue, setSortByValue] = useState("");
  const [userInput, setUserInput] = useState("");
  const [lightDark, setLightDark] = useState(false);
  const [recentlyFetch, setRecentlyFetch] = useState();
  const [allGames, setAllGames] = useState([]);
  const [searchedGames, setSearchedGames] = useState("");
  const [fetchTime, setFetchTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFetchTime(true);
    }, 2500);
  });

  return (
    <SearchedGames.Provider value={{ searchedGames, setSearchedGames }}>
      <AllGamesFetch.Provider value={{ allGames, setAllGames }}>
        <Recently.Provider value={{ recentlyFetch, setRecentlyFetch }}>
          <LightMode.Provider value={{ lightDark, setLightDark }}>
            <UserInput.Provider value={{ userInput, setUserInput }}>
              <GenreValue.Provider value={{ genreValue, setGenreValue }}>
                <SortByValue.Provider value={{ sortByValue, setSortByValue }}>
                  <PlatformValue.Provider
                    value={{ platformValue, setPlatformValue }}
                  >
                    {" "}
                    {fetchTime ? (
                      <BrowserRouter>
                        <Navbar />
                        <Searchbar />
                        <div className="app">
                          <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/allgames" element={<AllGames />} />
                            <Route
                              path="/recently"
                              element={<RecentlyAdded />}
                            />
                            <Route path="/details/:id" element={<Details />} />
                          </Routes>
                        </div>
                      </BrowserRouter>
                    ) : (
                      <FetchPage />
                    )}
                  </PlatformValue.Provider>
                </SortByValue.Provider>
              </GenreValue.Provider>
            </UserInput.Provider>
          </LightMode.Provider>
        </Recently.Provider>
      </AllGamesFetch.Provider>
    </SearchedGames.Provider>
  );
}

export default App;
