import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ClubPage from "./Components/ClubPage/Club";
import { Warper } from "./Components/Common/warper";
import Contact from "./Components/ContactPage/Contact";
import DrinkPage from "./Components/DrinkPage/DrinkPage";
import HomePage from "./Components/HomePage/Index";
import MyPayment from "./Components/PaymentPage/Payment";

const App = () => {
  return (
    <Router>
      {/* <MyNavbar /> */}
      <Routes>
        <Route
          path="/"
          element={
            <Warper>
              <HomePage />
            </Warper>
          }
        />
        <Route
          path="/drink"
          element={
            <Warper>
              <DrinkPage />
            </Warper>
          }
        />
        <Route
          path="/Club"
          element={
            <Warper isDark>
              <ClubPage />
            </Warper>
          }
        />
        <Route
          path="/cart"
          element={
            <Warper>
              <MyPayment />
            </Warper>
          }
        />
        <Route
          path="/contact"
          element={
            <Warper>
              <Contact />
            </Warper>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
