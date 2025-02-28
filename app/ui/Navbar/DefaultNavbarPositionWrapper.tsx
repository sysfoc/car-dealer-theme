"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const DefaultNavbarPositionWrapper = () => {
  const path = usePathname();
  const isHomePage = path === "/";

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 65) {
      setIsNavbarVisible(true);
    } else if (currentScrollY > lastScrollY.current) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }
    lastScrollY.current = currentScrollY;
  },[]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    // Navbar position control
    <div
      className={`fixed w-full top-0 left-0 min-w-[1160px] z-50 ${
        isNavbarVisible ? "-translate-y-0" : "-translate-y-full"
      }  transition-all duration-200
      `}
    >
      {/* NavbarComponent */}
      <Navbar isHomePage={isHomePage} />
    </div>
  );
};

export default DefaultNavbarPositionWrapper;
