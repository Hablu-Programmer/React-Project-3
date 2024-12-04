import { Button, Image } from "@nextui-org/react";

/**
 * Card component renders a card layout for displaying restaurant information.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.name - Name of the restaurant.
 * @param {string} props.address - Address of the restaurant.
 * @param {string} props.cuis - Cuisine of the restaurant.
 * @param {string} props.image - Image URL for the restaurant.
 *
 * The component includes:
 * - An image section displaying the restaurant image.
 * - Text sections for the restaurant name, address, and cuisine.
 * - A button for reserving a table.
 */
export const Card = (props) => {
  const { name, address, cuis, image } = props || {};

  return (
    <div className="rounded-lg w-full max-w-[295px] mx-auto">
      <Image
        src={image}
        alt={name}
        className="w-full h-[144.74px] md:h-[270px] rounded-[18px]"
      />
      <div className="p-2">
        <h2 className=" text-[12.87px] md:text-xl font-semibold">{name}</h2>
        <p className="text-[8.04px] md:text-sm text-gray-500">{address}</p>
        <p className="text-[8.04px] md:text-sm text-gray-700 mt-2">{cuis}</p>
        <Button size="sm" radius="sm" color="primary" className="mt-4 px-7">
          Reserve Now
        </Button>
      </div>
    </div>
  );
};
