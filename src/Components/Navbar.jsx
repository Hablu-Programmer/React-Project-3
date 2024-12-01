import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { ChevronDownIcon, UserIcon } from "@heroicons/react/24/outline";

function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuitems = [
    "Eat & Drink",
    "Club",
    "Things to do",
    "Shoping",
    "Account",
    "Contact",
  ];

  return (
    <section>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="w-full"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-level={isMenuOpen ? "Close menu" : "Open menu"}
          ></NavbarMenuToggle>
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3">
          <NavbarBrand>
            <img className="w-44 " src="/logo.png" alt="" />
          </NavbarBrand>
        </NavbarContent>

        {/* Deskop Device  */}

        <NavbarContent className="hidden sm:flex gap-4  w-full justify-center">
          <NavbarBrand>
            <NavbarBrand>
              {" "}
              <img className="w-44 " src="/logo.png" alt="" />
            </NavbarBrand>
          </NavbarBrand>
          <NavbarItem>
            <Link className="text-black">Eat & drink</Link>
          </NavbarItem>
          <NavbarItem>
            <Link>
              Club <sup className="!bg-blue-600 text-[8px] px-2 ">+HOT</sup>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="none">
                  Things to do{" "}
                  <ChevronDownIcon className="text-blue-500 w-4 h-4" />{" "}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Example with disabled actions"
                disabledKeys={["edit", "delete"]}
              >
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            <Link className="foreground">
              <img src="/shoping.png" alt="" />
            </Link>
          </NavbarItem>
          <NavbarItem>
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
          </NavbarItem>
          <NavbarItem>
            <Button color="primary">Contact Now</Button>
          </NavbarItem>
        </NavbarContent>


        <div className="lg:hidden">
        <NavbarContent className="w-full" justify="end">
          <NavbarItem className="hidden lg:flex"> </NavbarItem>

          <NavbarItem>
            <img src="/shoping.png" alt="" />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-[#F5FAFF]">
          {menuitems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link className="w-full text-black capitalize ">{item}</Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        </div>


      </Navbar>
    </section>
  );
}

export default MyNavbar;
