"use client"
import { usePathname } from "next/navigation";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

const PageContentLayoutWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
  const pathname = usePathname();
  return (
      <main className="mx-11">
        <div className={`${pathname!== '/cart'? "mt-[65px]": "mt-0"}`}>
          <div id="screenTop"></div>
          <NavigationMenu />
          {children}
        </div>
      </main>
  );
};

export default PageContentLayoutWrapper;
