import Restaurants from "../Common/RestuarantsCard";
import Carousel from "./DrinkCarousel";
import DrinkHero from "./DrinkHero";
import Map from "./Map";

const Club = () => {
  return (
    <main>
      <DrinkHero />
      <Restaurants isDark api="/clug-data.json" title="Popular Night Clubs" />
      <Carousel isDark />
      <Restaurants
        isDark
        api="/clug-data.json"
        title="Bars and Night clubs near you"
      />
      <Map />
    </main>
  );
};

export default Club;
