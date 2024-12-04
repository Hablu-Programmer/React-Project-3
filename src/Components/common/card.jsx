import { Button, Image } from "@nextui-org/react";

export const Card = (props) => {
  const { name, address, cuis, image } = props || {};
  return (
    <div className="rounded-lg w-full max-w-[295px] mx-auto">
      <Image
        src={image}
        alt={name}
        className="w-full h-[144.74px] md:h-[270px] lg:h-[270px] object-cover rounded-[18px]"
      />
      <div className="p-2">
        <h2 className=" text-[12.87px] md:text-xl  font-semibold">{name}</h2>
        <p className="text-[8.04px] md:text-sm text-gray-500">{address}</p>
        <p className="text-[8.04px] md:text-sm text-gray-700 mt-2">{cuis}</p>
        <Button size="sm" radius="sm" color="primary" className="mt-4 px-7">
          Reserve Now
        </Button>
      </div>
    </div>
  );
};
