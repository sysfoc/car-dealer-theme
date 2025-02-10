"use client"
import NavbarComponent from "@/app/ui/Navbar/NavbarComponent";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 200) {
        setIsNavbarVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      console.log(isNavbarVisible)
      setLastScrollY(currentScrollY);
    };

    document.addEventListener('scroll', handleScroll);

    return () => document.addEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
      <NavbarComponent isNavbarVisible={isNavbarVisible}/>
  );
};

export default Navbar;
