import { Button } from "@nextui-org/react";

/**
 * CarouselCard component renders a card layout for displaying upcoming events.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.image - Image URL for the event.
 * @param {string} props.heading - Heading/title of the event.
 * @param {string} props.des - Description of the event.
 *
 * The component includes:
 * - An image section displaying the event image.
 * - Text sections for the event heading and description.
 * - A grid layout for displaying event tags with images and titles.
 * - Buttons for adding to cart and booking the event.
 * - Social connection icons.
 */
export const CarouselCard = (props) => {
  const tags = [
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

  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 w-full px-12">
      <div className="w-full lg:w-1/2">
        <h3 className="text-3xl  font-semibold text-[#26395C] lg:ms-10 text-center lg:text-start">
          {props.subtitle}
        </h3>
        <img className="object-cover w-full h-auto" src={props.image} alt="" />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h2 className="text-2xl lg:text-5xl font-bold lg:w-[50%] leading-tight">
          {props.heading}
        </h2>
        <p className="text-gray-700 lg:w-[70%] text-xl">{props.des}</p>

        <div className="grid grid-cols-2 lg:w-[60%]">
          {tags.map((data) => (
            <div key={data.id} className="flex items-center mt-5 mb-5">
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
  );
};
