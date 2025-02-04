"use client"
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function Home() {
  const Interactable = useSelector((state: RootState)=> state.pageProperties.pageInteractable)
  return (
    <div>
      {/* Page Interactibility */}
      {!Interactable && (
        <div className="bg-black bg-opacity-20 w-screen h-screen fixed pointer-events-none top-0 left-0 z-20"></div>
      )}
      <p>HomePage</p>
    </div>
  );
}
