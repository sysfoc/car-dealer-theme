"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";


const DefaultNavbarPositionWrapper = () => {
  
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 65) {
        setIsNavbarVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, [isNavbarVisible]);

  return (
    // Navbar position control
    <div
      className={`fixed w-full top-0 left-0 min-w-[1160px] z-50 ${
        isNavbarVisible ? "-translate-y-0" : "-translate-y-full"
      }  transition-all duration-300
      `}
    >
      {/* NavbarComponent */}
      <Navbar/>
    </div>
  );
};

export default DefaultNavbarPositionWrapper;
