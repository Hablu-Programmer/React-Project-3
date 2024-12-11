import Restuarants from "../Common/RestuarantsCard";
import DrinkCarousel from "./DrinkCarousel";
import DrinkHero from "./DrinkHero";
import FindPlace from "./FindPlace";
import Map from "./Map";

function DrinkPage() {
  return (
    <>
      <DrinkHero />
      <FindPlace />
      <Restuarants title="Popular restuarants in Lagos" />
      <DrinkCarousel />
      <Restuarants title="Resturants nearby" />
      <Map />
    </>
  );
}

export default DrinkPage;