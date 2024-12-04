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
import Carousel from "./Components/common/carousel";
import {
  FindPlaces,
  HeroArea,
  Location,
  PopularRestaurants,
  RestaurantsNearby,
} from "./Components/eat-and-drink";
import { homepageCarousel } from "./lib/assets/data";

function App() {
  return (
    <main>
      <MyNavbar />
      <HeroArea />
      <FindPlaces />
      <PopularRestaurants />
      <Carousel
        data={homepageCarousel}
        subtitle="Upcoming Eat & Drink Events"
      />
      <RestaurantsNearby />
      <Location />
      <Footer />
    </main>
  );
}

export default App;
