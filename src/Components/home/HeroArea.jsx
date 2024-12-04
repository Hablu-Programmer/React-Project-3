import { Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";

function HeroArea() {
  return (
    <section className="bg-[url('./hero.png')] w-full  bg-no-repeat bg-cover h-[80vh] mt-4 overflow-hidden mx-auto ">
      <div className="container w-[80%] mx-auto mt-10">
        <h1 className="text-2xl lg:text-6xl w-full lg:w-[55%] font-bold py-10 px-10 mt-[30px] text-white leading-tight text-center lg:text-start">
          Find amazing things to do anytime, anywhere in Lagos.
        </h1>

        <div className="bg-[#FBFCFF] w-full h-auto lg:w-[750px] lg:h-[150px] py-10 px-10 lg:ms-10 rounded-xl">
          <div className="grid grid-col-1 lg:grid-cols-4 gap-2 ">
            <div>
              <Autocomplete
                labelPlacement="outside"
                label="Location"
                placeholder="Oshodi"
                className="w-[100%]"
              >
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Oshodi
                </AutocompleteItem>
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Hablu Programmer
                </AutocompleteItem>
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Stack Learner
                </AutocompleteItem>
              </Autocomplete>
            </div>
            <div>
              <Autocomplete
                labelPlacement="outside"
                label="Location"
                placeholder="Oshodi"
                className="w-[100%]"
              >
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Oshodi
                </AutocompleteItem>
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Hablu Programmer
                </AutocompleteItem>
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Stack Learner
                </AutocompleteItem>
              </Autocomplete>
            </div>
            <div>
              <Autocomplete
                labelPlacement="outside"
                label="Location"
                placeholder="Oshodi"
                className="w-[100%]"
              >
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Oshodi
                </AutocompleteItem>
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Hablu Programmer
                </AutocompleteItem>
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Stack Learner
                </AutocompleteItem>
              </Autocomplete>
            </div>
            <div>
              <Button color="primary" className="w-full p-8 mt-2">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroArea;
