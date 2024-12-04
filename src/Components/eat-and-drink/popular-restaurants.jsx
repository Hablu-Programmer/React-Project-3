import { Link } from "@nextui-org/react";
import { Card } from "../common";
import { restaurants } from "../../lib/assets/data";

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
