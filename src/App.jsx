import "./App.css";

import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage/Index";
import MyNavbar from "./Components/Navbar";
import DrinkPage from "./Components/DrinkPage/DrinkPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClubPage from "./Components/ClubPage/Club";

function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/drink" element={<DrinkPage />}></Route>
          <Route path="/Club" element={<ClubPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
