import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";
import { NavLink } from "react-router";
import { themeColor } from "../lib/utils";
import ProfileDropDown from "./HomePage/Dropdown";
import MyModal from "./HomePage/Modal";
import { ShopingIcon } from "./icon";

const value = true;

const MyNavbar = ({ isDark }) => {
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
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      className={themeColor(isDark)}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-level={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3">
        <NavbarBrand>
          <NavLink to="/">
            <img className="w-44 " src="/logo.png" alt="" />{" "}
          </NavLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Deskop Device  */}

      <NavbarContent className="hidden sm:flex gap-4  w-full justify-center">
        <NavbarBrand>
          <NavbarBrand>
            <NavLink to="/">
              <img className="w-44 " src="/logo.png" alt="" />
            </NavLink>
          </NavbarBrand>
        </NavbarBrand>
        <NavbarItem>
          <NavLink
            to="/drink"
            className={isDark ? "text-white" : "text-black"}
            style={({ isActive }) => ({
              color: isActive ? "#0E8BFF" : isDark ? "white" : "black",
            })}
          >
            Eat & drink
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="/club"
            style={({ isActive }) => ({
              color: isActive ? "#0E8BFF" : isDark ? "white" : "black",
            })}
          >
            Club <sup className=" text-[8px] px-2 ">+HOT</sup>
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <Dropdown className={isDark ? "bg-slate-800 text-white" : ""}>
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
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Link className="foreground">
            <NavLink to="/cart">
              <ShopingIcon isDark={isDark} />
            </NavLink>
          </Link>
        </NavbarItem>
        <NavbarItem>
          {value === true ? <MyModal isDark={isDark} /> : <ProfileDropDown />}
        </NavbarItem>
        <NavbarItem>
          <NavLink to="contact">
            <button className="bg-blue-600 px-3 py-1.5 rounded-xl text-white font-semibold">
              Contact Now
            </button>
          </NavLink>
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
  );
};

export default MyNavbar;
