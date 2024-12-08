import React from "react";
import { Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/react";
import { now, parseAbsoluteToLocal } from "@internationalized/date";
function FindPlace() {
  let [date, setDate] = React.useState(
    parseAbsoluteToLocal("2021-04-07T18:45:22Z")
  );
  return (
    <section className="w-[85%] mx-auto py-5">
      <div className="bg-[#FBFCFF] w-full h-auto  lg:h-[150px] py-10 px-10 lg:ms-10 rounded-xl lg:w-[90%]">
        <div className="grid grid-col-1 lg:grid-cols-6 gap-10 ">
          <div>
            <Autocomplete
              labelPlacement="outside"
              label="Location"
              placeholder="Oshodi"
              className="w-[100%]"
            >
              <AutocompleteItem value="Hablu Programmer" className="text-black">
                Oshodi
              </AutocompleteItem>
              <AutocompleteItem value="Hablu Programmer" className="text-black">
                Hablu Programmer
              </AutocompleteItem>
              <AutocompleteItem value="Hablu Programmer" className="text-black">
                Stack Learner
              </AutocompleteItem>
            </Autocomplete>
          </div>
          <div>
            <DatePicker
              labelPlacement="outside"
              className="max-w-[284px]"
              label="Birth date"
            />
            ;
          </div>
          <div>
            <DatePicker
              className="max-w-md"
              granularity="minute"
              hourCycle="12"
              hideTimeZone="false"
              label="time"
              labelPlacement="outside"
              value={date}
              onChange={setDate}
      
            />
          </div>
          <div>
            <Autocomplete
              labelPlacement="outside"
              label="Cuisine"
              placeholder="Chinese"
              className="w-[100%]"
            >
              <AutocompleteItem value="Hablu Programmer" className="text-black">
                Oshodi
              </AutocompleteItem>
              <AutocompleteItem value="Hablu Programmer" className="text-black">
                Hablu Programmer
              </AutocompleteItem>
              <AutocompleteItem value="Hablu Programmer" className="text-black">
                Stack Learner
              </AutocompleteItem>
            </Autocomplete>
          </div>
          <div>
            <Autocomplete
              labelPlacement="outside"
              label="People"
              placeholder="2"
              className="w-[100%]"
            >
              <AutocompleteItem value="Hablu Programmer" className="text-black">
                Oshodi
              </AutocompleteItem>
              <AutocompleteItem value="Hablu Programmer" className="text-black">
                Hablu Programmer
              </AutocompleteItem>
              <AutocompleteItem value="Hablu Programmer" className="text-black">
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
    </section>
  );
}

export default FindPlace;
