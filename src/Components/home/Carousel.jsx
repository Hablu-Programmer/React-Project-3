import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Carousel() {
  const CarouselData = [
    {
      id: 1,
      image: "/slider.png",
      heading: "Wizkid made in lagos tour",
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  const currentSlider = CarouselData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? CarouselData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === CarouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="overflow-hidden p-12">
      <h1 className="text-center text-2xl lg:text-5xl text-[#26395C] mt-24 mb-12 font-semibold">
        See How People are Chilling On Chillsbay
      </h1>

      <div className="relative w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrev}
            className="absolute left-0 transform -translate-x-6 flex items-center justify-center  text-black rounded-full w-12 h-12 "
          >
            <FaArrowLeft />
          </button>

          <div className="flex flex-col lg:flex-row items-center gap-6 w-full px-12">
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl  font-semibold text-[#26395C] lg:ms-10 text-center lg:text-start">
                Upcoming events this weekend
              </h3>
              <img
                className="object-cover w-full h-auto"
                src={currentSlider.image}
                alt=""
              />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <h2 className="text-2xl lg:text-5xl font-bold lg:w-[50%] leading-tight">
                {currentSlider.heading}
              </h2>
              <p className="text-gray-700 lg:w-[70%] text-xl">
                {currentSlider.des}
              </p>

              <div className="grid grid-cols-2 lg:w-[60%]">
                {TagData.map((data, id) => (
                  <div key={id} className="flex items-center mt-5 mb-5">
                    <img src={data.img} alt="" />
                    <p className="ms-2 text-lg font-semibold">{data.title}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Button color="primary" variant="bordered" size="lg">
                  Add To Cart
                </Button>
                <Button color="primary" size="lg">
                  Book Now
                </Button>
              </div>

              <div className="flex gap-4 mt-5">
                <p>Connect with us on:</p>

                <div className="flex gap-3">
                  <img src="/Twitter.png" alt="" />
                  <img src="/Instagram.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 transform -translate-x-6 flex items-center justify-center  text-black rounded-full w-12 h-12"
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="flex justify-center items-center gap-2 mt-6">
          {CarouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-black" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
