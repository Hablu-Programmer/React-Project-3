import { CalendarDate, parseDate } from "@internationalized/date";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  DateInput,
  TimeInput,
} from "@nextui-org/react";
import { CalendarIcon, ClockIcon } from "../shared/icons";

export const FindPlaces = () => {
  return (
    <section className="py-7">
      <div className="bg-[#FBFCFF] w-full max-w-[1022px] rounded-lg mx-auto px-[30px] pt-5 pb-[30px]">
        <h1 className="text-2xl md:text-[28px] font-bold">
          Find the best places to eat and drink for any occasion
        </h1>

        <div className="pt-2.5 grid sm:grid-cols-3 lg:grid-cols-6 place-items-center lg:place-items-end gap-2.5">
          <Autocomplete
            labelPlacement="outside"
            label="Location"
            placeholder="Oshodi, VI"
            className="sm:max-w-[152px] w-full"
            variant="bordered"
            radius="sm"
          >
            <AutocompleteItem value="Hablu Programmer" className="text-black">
              Oshodi, VI
            </AutocompleteItem>
            <AutocompleteItem value="Hablu Programmer" className="text-black">
              Oshodi, VI 2
            </AutocompleteItem>
            <AutocompleteItem value="Hablu Programmer" className="text-black">
              Oshodi, VI 3
            </AutocompleteItem>
          </Autocomplete>

          <DateInput
            label="Date"
            defaultValue={parseDate("2024-04-04")}
            className="sm:max-w-[152px] w-full"
            placeholderValue={new CalendarDate(1995, 11, 6)}
            labelPlacement="outside"
            variant="bordered"
            radius="sm"
            endContent={
              <CalendarIcon className="text-2xl pointer-events-none flex-shrink-0" />
            }
          />
          <TimeInput
            variant="bordered"
            radius="sm"
            className="sm:max-w-[152px] w-full"
            label="Time"
            labelPlacement="outside"
            endContent={
              <ClockIcon className="text-2xl pointer-events-none flex-shrink-0" />
            }
          />
          <Autocomplete
            labelPlacement="outside"
            label="Cuisine"
            placeholder="Chinese"
            className="sm:max-w-[152px] w-full"
            variant="bordered"
            radius="sm"
          >
            <AutocompleteItem value="Hablu Programmer" className="text-black">
              Chinese
            </AutocompleteItem>
            <AutocompleteItem value="Hablu Programmer" className="text-black">
              Chinese 2
            </AutocompleteItem>
            <AutocompleteItem value="Hablu Programmer" className="text-black">
              Chinese 3
            </AutocompleteItem>
          </Autocomplete>

          <Autocomplete
            labelPlacement="outside"
            label="People"
            placeholder="2"
            className="sm:max-w-[152px] w-full"
            variant="bordered"
            radius="sm"
          >
            <AutocompleteItem value="Hablu Programmer" className="text-black">
              2
            </AutocompleteItem>
            <AutocompleteItem value="Hablu Programmer" className="text-black">
              3
            </AutocompleteItem>
            <AutocompleteItem value="Hablu Programmer" className="text-black">
              5
            </AutocompleteItem>
          </Autocomplete>

          <Button
            color="primary"
            className="w-full sm:max-w-[152px] sm:p-8 mt-2"
          >
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};
