import Carousel from "../Common/Carousel";
import Map from "../Common/map";
import Restaurants from "../Common/RestuarantsCard";
import Hero from "./hero";

const Club = () => {
  return (
    <main>
      <Hero />
      <Restaurants isDark api="/clug-data.json" title="Popular Night Clubs" />
      <Carousel isDark data={CarouselData} tags={TagData} />
      <Restaurants
        isDark
        api="/clug-data.json"
        title="Bars and Night clubs near you"
      />
      <Map isDark />
    </main>
  );
};

export default Club;

const CarouselData = [
  {
    id: 1,
    image: "/DrinkCarosel.png",
    heading:
      "GTCO Food and Drink Festival 2022: Africa’s Biggest Food and Drink Festival",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: 2,
    image: "/slider.png",
    heading: "Hablu Programmer Is The Best",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: 3,
    image: "/slider.png",
    heading: "We Learning Full Stack Web Development",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
];

const TagData = [
  {
    id: 1,
    img: "Calendar.png",
    title: "Dec 12 2024",
  },
  {
    id: 2,
    img: "Mark.png",
    title: "TBS  Lagos",
  },
  {
    id: 3,
    img: "Clock.png",
    title: "9:00 PM",
  },
  {
    id: 4,
    img: "Tag.png",
    title: "N20,000",
  },
];
