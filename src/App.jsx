import "./App.css";
import { EatAndDrinkPage } from "./Components/eat-and-drink";
import Footer from "./Components/shared/Footer";
import MyNavbar from "./Components/shared/Navbar";

function App() {
  return (
    <>
      <MyNavbar />
      <EatAndDrinkPage />
      <Footer />
    </>
  );
}

export default App;
