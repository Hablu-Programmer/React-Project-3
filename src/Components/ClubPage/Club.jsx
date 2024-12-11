import Restuarants from "../Common/RestuarantsCard";
import DrinkCarousel from "./DrinkCarousel";
import DrinkHero from "./DrinkHero";
import Map from "./Map";

const Club = () => {
  return (
    <main>
      <DrinkHero />
      <Restuarants title="Popular restuarants in Lagos" />
      <DrinkCarousel />
      <Restuarants title="Resturants nearby" />
      <Map />
    </main>
  );
};

export default Club;
