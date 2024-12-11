import "./App.css";

import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage/Index";
import MyNavbar from "./Components/Navbar";
import DrinkPage from "./Components/DrinkPage/DrinkPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClubPage from "./Components/ClubPage/Club";
import MyPayment from "./Components/PaymentPage/Payment";
import ContactSection from "./Components/ContactPage/Contact";
import Contact from "./Components/ContactPage/Contact";

function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/drink" element={<DrinkPage />}></Route>
          <Route path="/Club" element={<ClubPage />}></Route>
          <Route path="/cart" element={<MyPayment />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

     
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
