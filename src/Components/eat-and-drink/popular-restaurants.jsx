import { Link } from "@nextui-org/react";
import { Card } from "../common";

export const PopularRestaurants = () => {
  return (
    <section className="w-full py-16 bg-[#F5FAFF]">
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="flex justify-between items-center gap-2.5 px-2">
          <h1 className="font-bold text-lg sm:text-2xl lg:text-[32px]">
            Popular restuarants in Lagos
          </h1>
          <Link className="text-xs lg:text-2xl" color="primary">
            See More
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-8 px-2 pt-6 mx-auto w-fit place-items-center">
          {restaurants.map((restaurant, i) => (
            <Card key={i} {...restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
};

const restaurants = [
  {
    name: "Slow Lagos",
    image: "img1.png",
    address: "2 Musa Yar’Adua, Lagos Nigeria",
    cuis: "African • Italian • Asian • Continental",
  },
  {
    name: "Nok by Alara",
    image: "img2.png",
    address: "2 Musa Yar’Adua, Lagos Nigeria",
    cuis: "African • Italian • Asian • Continental",
  },
  {
    name: "Noir",
    image: "img3.png",
    address: "2 Musa Yar’Adua, Lagos Nigeria",
    cuis: "African • Italian • Asian • Continental",
  },
  {
    name: "Soho",
    image: "img4.png",
    address: "2 Musa Yar’Adua, Lagos Nigeria",
    cuis: "African • Italian • Asian • Continental",
  },
];
