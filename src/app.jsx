import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NHLRanks from "./pages/NHLRanks";
import NBARanks from "./pages/NBARanks";
import NFLRanks from "./pages/NFLRanks";
import Navigation from "./components/Navigation/Navigation";
import NFLWeekly from "./pages/NFLWeekly";
import NFLRestofSeason from "./pages/NFLRestofSeason";
import NFLDynasty from "./pages/NFLDynasty";
import NBARestofSeason from "./pages/NBARestofSeason";
import NBADynasty from "./pages/NBADynasty";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nhl-ranks" element={<NHLRanks />} />
        <Route path="/nba-ranks" element={<NBARanks />} />
        <Route path="/nfl-ranks" element={<NFLRanks />} />
        <Route path="/nfl-ranks/weekly" element={<NFLWeekly />} />
        <Route path="/nfl-ranks/rest-of-season" element={<NFLRestofSeason />} />
        <Route path="/nfl-ranks/dynasty" element={<NFLDynasty />} />
        <Route path="/nba-ranks/rest-of-season" element={<NBARestofSeason />} />
        <Route path="/nba-ranks/dynasty" element={<NBADynasty />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;