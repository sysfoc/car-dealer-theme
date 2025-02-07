"use client"
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Index from ".";
import PromotionalBanner from "@/app/ui/PromotionalBanner";
import TemuBanner from "@/app/ui/TemuBanner";

export default function Home() {
  const Interactable = useSelector((state: RootState)=> state.pageProperties.pageInteractable)
  return (
    <div className="mx-5">
      {/* Page Interactibility */}
      {!Interactable && (
        <div className="bg-black bg-opacity-20 w-screen h-screen fixed pointer-events-none  top-0 left-0 z-20"></div>
      )}
     
      <TemuBanner/>
      <PromotionalBanner/>
      <Index/>
    </div>
  );
}
