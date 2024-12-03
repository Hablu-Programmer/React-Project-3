import { Button } from "@nextui-org/react";

export const HeroArea = () => {
  return (
    <section className="bg-[url('./eat-and-drink-hero-bg.png')] w-full h-[70vh] bg-no-repeat bg-top md:bg-cover overflow-hidden mx-auto">
      <div className="flex flex-col justify-start items-center lg:pt-[100px] lg:pl-[100px] p-4 pt-6">
        <div className="container w-full max-w-[330px] md:max-w-[600px] bg-[#FBFCFF]/90 rounded-lg p-[18px] md:py-[30px] md:px-8 ">
          <h1 className="text-2xl md:text-2xl lg:text-[42px] font-bold pb-3.5 lg:pb-6">
            Our top pick for the week!
          </h1>
          <h3 className="font-bold text-lg md:text-xl lg:text-[32px]">
            Nok by Alara
          </h3>

          <p className="text-xl hidden md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor .
          </p>

          <div className="flex justify-end items-center">
            <Button radius="sm" color="primary">
              Reserve Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
