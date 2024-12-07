import {
  FindPlaces,
  HeroArea,
  Location,
  PopularRestaurants,
  RestaurantsNearby,
} from "../Components/eat-and-drink";
import MyNavbar from "../Components/shared/Navbar";

export const EatAndDrink = () => {
  return (
    <main>
      <MyNavbar />
      <HeroArea />
      <FindPlaces />
      <PopularRestaurants />
      <RestaurantsNearby />
      <Location />
    </main>
  );
};
