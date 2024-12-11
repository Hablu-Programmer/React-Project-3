import Restaurants from "../Common/RestuarantsCard";
import DrinkCarousel from "./DrinkCarousel";
import DrinkHero from "./DrinkHero";
import FindPlace from "./FindPlace";
import Map from "./Map";

function DrinkPage() {
  return (
    <>
      <DrinkHero />
      <FindPlace />
      <Restaurants api="/data.json" title="Popular restaurants in Lagos" />
      <DrinkCarousel />
      <Restaurants api="/data.json" title="Restaurants nearby" />
      <Map />
    </>
  );
}

export default DrinkPage;
