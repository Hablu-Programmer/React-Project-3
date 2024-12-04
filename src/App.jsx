import "./App.css";
import Footer from "./Components/shared/Footer";
import MyNavbar from "./Components/shared/Navbar";

// Home page
// import Carousel from "./Components/home/Carousel";
// import Chillsbay from "./Components/home/Chillsbay";
// import GALARY from "./Components/home/GALARY.jsx";
// import HeroArea from "./Components/home/HeroArea";
// import ImageCardSection from "./Components/home/ImgSection";
// import ThingsCard from "./Components/home/ThingsToDo";

// Eat and Drink page
import {
  FindPlaces,
  HeroArea,
  Location,
  PopularRestaurants,
  RestaurantsNearby,
} from "./Components/eat-and-drink";

function App() {
  return (
    <main>
      <MyNavbar />
      <HeroArea />
      <FindPlaces />
      <PopularRestaurants />
      <RestaurantsNearby />
      <Location />
      <Footer />
    </main>
  );
}

export default App;
