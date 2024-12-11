import React from "react";
import DrinkHero from "./DrinkHero";
import FindPlace from "./FindPlace";
import DrinkCarousel from "./DrinkCarousel";
import Restuarants from "../Common/RestuarantsCard";
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
