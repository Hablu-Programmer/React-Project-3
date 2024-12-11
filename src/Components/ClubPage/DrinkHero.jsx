import { Button } from "@nextui-org/react";

const DrinkHero = () => {
  return (
    <section className='bg-[url("./club-hero.png")] w-full h-[65vh] bg-no-repeat bg-top  md:bg-cover overflow-hidden mx-auto'>
      <div className="flex flex-col justify-start items-center lg:items-start lg:py-[100px] p-4 pt-6 w-[80%] mx-auto">
        <div className="bg-black/60 container w-full max-w-[330px] md:max-w-[600px] rounded-lg p-[18px] md:py-[30px] md:px-8">
          <h1 className="text-2xl lg:text-[42px] font-bold pb-3.5 lg:pb-6">
            Club Quilox
          </h1>
          <h4 className="font-bold text-lg lg:text-xl ">
            Amaarae & Tems on June 3rd{" "}
          </h4>

          <div className="flex justify-end items-center">
            <Button color="primary" radius="sm">
              {" "}
              Book A Section Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrinkHero;
