import { homepageCarousel } from "../../lib/assets/data";
import Carousel from "./Components/home/Carousel";
import Chillsbay from "./Components/home/Chillsbay";
import GALARY from "./Components/home/GALARY.jsx";
import HeroArea from "./Components/home/HeroArea";
import ImageCardSection from "./Components/home/ImgSection";
import ThingsCard from "./Components/home/ThingsToDo";
import Footer from "./Components/shared/Footer";
import MyNavbar from "./Components/shared/Navbar";

export const HomePage = () => {
  return (
    <main>
      <MyNavbar />
      <HeroArea />
      <Chillsbay />
      <GALARY />
      <ThingsCard />
      <ImageCardSection />
      <Carousel
        data={homepageCarousel}
        subtitle="Upcoming events this weekend"
      />
      <Footer />
    </main>
  );
};
