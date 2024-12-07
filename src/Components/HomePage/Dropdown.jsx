import React from 'react'
import { UserIcon } from "@heroicons/react/24/outline";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
  } from "@nextui-org/react";
  
function ProfileDropDown() {
  return (
    <div>
         <Dropdown>
              <DropdownTrigger>
                <Button variant="none">
                  {" "}
                  <UserIcon className="text-gray-500 w-4 h-4" /> Account{" "}
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="profile">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
              </DropdownMenu>
            </Dropdown>
    </div>
  )
}

export default ProfileDropDown