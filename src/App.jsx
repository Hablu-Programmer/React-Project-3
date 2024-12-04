import "./App.css";
import { HomePage } from "./Components/home";
import Footer from "./Components/shared/Footer";
import MyNavbar from "./Components/shared/Navbar";
// import { EatAndDrinkPage } from "./Components/eat-and-drink";

function App() {
  return (
    <>
      <MyNavbar />
      <HomePage />
      {/* <EatAndDrinkPage /> */}
      <Footer />
    </>
  );
}

export default App;
