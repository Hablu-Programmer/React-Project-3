import { Button } from "@nextui-org/react";

export const HeroArea = () => {
  return (
    <section className="bg-[url('./eat-and-drink-hero-bg.png')] w-full h-[70vh] bg-no-repeat bg-cover mt-4 overflow-hidden mx-auto">
      <div className="container w-full max-w-[600px] bg-[#FBFCFF]/90 rounded-lg py-[30px] px-8 mt-[100px] ml-[100px]">
        <h1 className="text-[42px] font-bold pb-6">
          Our top pick for the week!
        </h1>
        <h3 className="font-bold text-[32px]">Nok by Alara</h3>

        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor .
        </p>

        <div className="flex justify-end items-center">
          <Button radius="sm" color="primary">
            Reserve Now
          </Button>
        </div>
      </div>
    </section>
  );
};
