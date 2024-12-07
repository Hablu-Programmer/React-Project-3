import { homepageCarousel } from "../../lib/assets/data";
import Carousel from "../common/carousel";
import { FindPlaces } from "./find-places";
import { HeroArea } from "./HeroArea";
import { Location } from "./location";
import { PopularRestaurants } from "./popular-restaurants";
import { RestaurantsNearby } from "./restaurants-nearby";

export const EatAndDrinkPage = () => {
  return (
    <main>
      <HeroArea />
      <FindPlaces />
      <PopularRestaurants />
      <Carousel
        data={homepageCarousel}
        subtitle="Upcoming Eat & Drink Events"
      />
      <RestaurantsNearby />
      <Location />
    </main>
  );
};
