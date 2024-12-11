import { UserIcon } from "@heroicons/react/24/outline";
import {
  Button,
  cn,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

const ProfileDropDown = ({ isDark }) => {
  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="none"
            color="primary"
            className={cn("text-gray-500", isDark && "bg-black text-white")}
          >
            <UserIcon
              className={cn("text-gray-500 w-4 h-4", isDark && "text-white")}
            />
            Account
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="profile">
          <DropdownItem key="new"></DropdownItem>
          <DropdownItem key="copy">Login</DropdownItem>
          <DropdownItem key="edit">Edit file</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ProfileDropDown;
