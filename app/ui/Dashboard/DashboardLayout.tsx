"use client"
import { useState } from "react";
import Breadcrumb from "../Breadcrumb";
import { usePathname } from "next/navigation";
import DashboardSidebarLinks from "./DashboardSidebarLinks";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [breadcrumbLinks, setBreadcrumbLinks] = useState([
    { title: "Home", link: "/" },
  ]);
  const path = usePathname();

  return (
    <>
      <Breadcrumb links={breadcrumbLinks} />
      <section className="flex relative">
        <DashboardSidebarLinks currentPath={path} setBreadcrumbLinks={setBreadcrumbLinks}/>
        <div className="w-full min-h-[550px] flex-1 p-2">
          {children}
        </div>
      </section>
    </>
  );
}
