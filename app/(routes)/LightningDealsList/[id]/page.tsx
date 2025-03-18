"use client";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { useState } from "react";
import ProductDetails from "@/app/ui/ProductComponent/ProductDetails";
import ProductImages from "@/app/ui/ProductComponent/ProductImage";
import ProductReview from "@/app/ui/ProductComponent/ProductReview";
import ProductStore from "@/app/ui/ProductComponent/ProductStore";
import { PiGreaterThan } from "react-icons/pi";
import ProductAllPics from "@/app/ui/ProductComponent/ProductAllPics";
import ProductsSectionGrid from "@/app/ui/ProductCard/ProductsSectionGrid";
import ProductSpecs from "@/app/ui/ProductComponent/ProductSpecs";
import { AppRootState } from "@/store";
import { useSelector } from "react-redux";

export default function LighteningDealDetail() {
  const [selectedQuantity, setSelectedQuantity] = useState(20);
  const { id } = useParams();
  const lightningProducts = useSelector((state:AppRootState)=> state.lightningProducts.lightningProducts)

  if (!id) return notFound();
  const product = lightningProducts.find((p) => p._id.toString() === id);
  if (!product) return notFound();

  return (
    <div className="max-w-6xl mx-auto font-sans">
      <div className=" py-3 flex items-center gap-3">
      <div className="flex items-center gap-3 text-gray-400">
        <span>Home</span> 
        <PiGreaterThan fontSize={15} className="relative top-[2.5px]"/>
        <span>Office & school supplies </span>
        <PiGreaterThan fontSize={15} className="relative top-[2.5px]"/>
        <span>Storage & Organization </span>
        <PiGreaterThan fontSize={15} className="relative top-[2.5px]"/>
      </div>
      <div>
        <span>{product.title}</span>
      </div>
      </div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-6 space-y-12">
          <ProductImages product={product} />
          <ProductReview />
          <ProductStore />
          <ProductSpecs/>
          <ProductAllPics/>
        </div>
        <div className="col-span-6 sticky top-0 max-w-xl self-start h-screen overflow-y-auto scrollbar-hidden">
          <ProductDetails
            product={product}
            selectedQuantity={selectedQuantity}
            setSelectedQuantity={setSelectedQuantity}
          />
        </div>
      </div>
      <ProductsSectionGrid columns={5} showTags={true} showStoreInfo={true} showOfferEndTime={true} />
    </div>
  );
}
