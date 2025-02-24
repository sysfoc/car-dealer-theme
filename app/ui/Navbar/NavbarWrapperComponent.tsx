"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import NavbarForCart from "./NavbarForCart";

const NavbarWrapperComponent = () => {
  const path = usePathname();
  return path !== "/cart" ? <Navbar /> : <NavbarForCart />;
};

export default NavbarWrapperComponent;
