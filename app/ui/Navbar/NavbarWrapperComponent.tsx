"use client";
import { usePathname } from "next/navigation";
import NavbarForCart from "./NavbarForCart";
import DefaultNavbarPositionWrapper from "./DefaultNavbarPositionWrapper"

const NavbarWrapperComponent = () => {
  const path = usePathname();
  return path !== "/cart" ? <DefaultNavbarPositionWrapper /> : <NavbarForCart />;
};

export default NavbarWrapperComponent;
