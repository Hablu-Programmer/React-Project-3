import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const carouselData = [
  {
    id: 1,
    image: "/slider.png",
    heading: "Wizkid made in lagos tour",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "December 1, 2024",
  },
  {
    id: 2,
    image: "/img1.png",
    heading: "Build Stunning Applications",
    description:
      "Learn how to create responsive and interactive web applications using modern tools.",
    date: "December 2, 2024",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/600x400",
    heading: "Master the MERN Stack",
    description:
      "Join us to master MongoDB, Express.js, React.js, and Node.js with hands-on projects.",
    date: "December 3, 2024",
  },
];

const TagData = [
  {
    img: "Calendar.png",
    title: "Dec 12 2024",
  },
  {
    img: "Mark.png",
    title: "TBS Lagos",
  },
  {
    img: "Clock.png",
    title: "9:00 PM",
  },
  {
    img: "Tag.png",
    title: "N20,000",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const currentSlide = carouselData[currentIndex];

  return (
    <section className="overflow-x-hidden">
      <h1 className="text-center text-2xl lg:text-5xl text-[#26395C] mt-24 mb-12 font-semibold">
        See How People are Chilling On Chillsbay
      </h1>

      <div className="relative w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 transform -translate-x-6 flex items-center justify-center bg-blue-500 text-white w-12 h-12 rounded-full shadow-lg hover:bg-blue-600 transition"
          >
            <FaArrowLeft />
          </button>

          {/* Content */}
          <div className="flex flex-col lg:flex-row items-center gap-6 w-full px-12">
            {/* Left Side: Image */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-semibold text-[#26395C] ms-10">
                {" "}
                Upcoming events this weekend
              </h3>
              <img
                src={currentSlide.image}
                className="object-cover w-full !h-auto lg:h-96"
              />
            </div>

            {/* Right Side: Text */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4 ">
              <h2 className="text-2xl lg:text-5xl font-bold w-[50%]">
                {currentSlide.heading}
              </h2>
              <p className="text-gray-700 w-[65%] text-xl">
                {currentSlide.description}
              </p>

              <div className="grid grid-cols-2 w-[60%]">
                {TagData.map((data) => (
                  <div className="flex items-center mt-5 mb-5">
                    <img src={data.img} alt="" />
                    <p className="text-lg font-semibold ms-2">{data.title}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
              <Button color="primary" variant="bordered" size="lg">
                  Add to Cart  
                </Button>  
                <Button color="primary" size="lg">Book Now</Button>
              </div>


            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 transform translate-x-6 flex items-center justify-center bg-green-500 text-white w-12 h-12 rounded-full shadow-lg hover:bg-green-600 transition"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-blue-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
