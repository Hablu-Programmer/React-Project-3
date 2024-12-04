import "./App.css";
import { EatAndDrink } from "./pages";

import "./App.css";
import Carousel from "./Components/Carousel";
import Chillsbay from "./Components/Chillsbay";
import Footer from "./Components/Footer";
import GALARY from "./Components/GALARY.JSX";
import HeroArea from "./Components/HeroArea";
import ImageCardSection from "./Components/ImgSection";
import MyNavbar from "./Components/Navbar";
import ThingsCard from "./Components/ThingsToDo";
function App() {
  return (
    <>
      <MyNavbar />
      <HeroArea />
      <ImageCardSection />
      <ThingsCard />
      <Chillsbay />
      <Carousel />
      <GALARY />
      <Footer />
    </>
  );
}

export default App;
