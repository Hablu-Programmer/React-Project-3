import { cn } from "@nextui-org/react";

export const NavigationButton = (props) => {
  const { icon, onClick, className } = props;

  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute transform -translate-x-6 flex items-center justify-center  text-black rounded-full w-12 h-12",
        className
      )}
    >
      {icon}
    </button>
  );
};
