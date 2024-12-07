import React, { useState } from "react";
import { NavLink } from "react-router";
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

const value = true;
import { ChevronDownIcon, UserIcon } from "@heroicons/react/24/outline";
import MyModal from "./HomePage/Modal";
import ProfileDropDown from "./HomePage/Dropdown";

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
        maxWidth="2xl"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-level={isMenuOpen ? "Close menu" : "Open menu"}
          ></NavbarMenuToggle>
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3">
          <NavbarBrand>
            <NavLink to="/">
              {" "}
              <img className="w-44 " src="/logo.png" alt="" />{" "}
            </NavLink>
          </NavbarBrand>
        </NavbarContent>

        {/* Deskop Device  */}

        <NavbarContent className="hidden sm:flex gap-4  w-full justify-center">
          <NavbarBrand>
            <NavbarBrand>
              <NavLink to="/">
                {" "}
                <img className="w-44 " src="/logo.png" alt="" />{" "}
              </NavLink>
            </NavbarBrand>
          </NavbarBrand>
          <NavbarItem>
            <NavLink
              to="/drink"
              className="text-black"
              style={({ isActive }) => ({
                color: isActive ? "#0E8BFF" : "black",
              })}
            >
              Eat & drink
            </NavLink>
          </NavbarItem>
          <NavbarItem>
         
           <NavLink to="/club"   style={({ isActive }) => ({
                color: isActive ? "#0E8BFF" : "black",
              })}>    Club <sup className=" text-[8px] px-2 ">+HOT</sup></NavLink>
           
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
            {value === true ? <MyModal /> : <ProfileDropDown />}
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
