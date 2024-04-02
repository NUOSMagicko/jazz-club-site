import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { NavProvider } from "./context/NavContext"; // Make sure the path is correct
import CoffeeMenuPage from "./pages/CoffeeMenuPage/CoffeeMenuPage";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <NavProvider> {/* Wrap the Routes with NavProvider */}
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<LandingPage />} />
          {/* You can add more Route components here to define other paths */}
          <Route path="/coffeemenu" element={<CoffeeMenuPage />} />
        </Routes>
      </NavProvider>
    </Router>
  );
}

export default App;
