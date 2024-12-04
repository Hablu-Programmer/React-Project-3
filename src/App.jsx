import "./App.css";
import { HomePage } from "./Components/home";
import Footer from "./Components/shared/Footer";
import MyNavbar from "./Components/shared/Navbar";

function App() {
  return (
    <>
      <MyNavbar />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
