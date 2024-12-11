import { cn } from "@nextui-org/react";

const Map = ({ isDark }) => (
  <section className={cn("bg-[#F5FAFF] p-10 ", isDark && "bg-black")}>
    <div className="w-[80%] mx-auto">
      <img className="w-full object-cover rounded-lg " src="./map.png" alt="" />
    </div>
  </section>
);

export default Map;
