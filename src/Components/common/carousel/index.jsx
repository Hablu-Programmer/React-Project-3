import { cn } from "@nextui-org/react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CarouselCard } from "./card";
import { NavigationButton } from "./navigation-button";

export const Carousel = (props) => {
  const { data, title, subtitle } = props || {};

  const [current, setCurrent] = useState(0);

  const currentSlider = data[current];
  const items = data.length - 1;

  const handleDotClick = (index) => setCurrent(index);
  const handlePrev = () => setCurrent((prv) => (prv === 0 ? items : prv - 1));
  const handleNext = () => setCurrent((prv) => (prv === items ? 0 : prv + 1));

  return (
    <section className="overflow-hidden p-12">
      {title && (
        <h1 className="text-center text-2xl lg:text-5xl text-[#26395C] mt-24 mb-12 font-semibold">
          {title}
        </h1>
      )}

      <div className="relative w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between">
          <NavigationButton
            onClick={handlePrev}
            className="left-0"
            icon={<FaArrowLeft />}
          />

          <CarouselCard {...currentSlider} subtitle={subtitle} />

          <NavigationButton
            onClick={handleNext}
            className="right-0"
            icon={<FaArrowRight />}
          />
        </div>

        <div className="flex justify-center items-center gap-2 mt-6">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                "w-3 h-3 rounded-full bg-gray-300",
                index === current && "bg-black"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
