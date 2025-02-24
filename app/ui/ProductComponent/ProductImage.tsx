"use client";
import { useState } from "react";
import Image from "next/image";
import AllPictures from "@/data/AllPictures";

type Product = {
    image: string,
    title: string
}

export default function ProductImages({ product }: { product: Product }) {
  const [mainImage, setMainImage] = useState(product.image);

  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-start">
        <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto scrollbar-hidden w-[70px]">
          {AllPictures.map((img, index) => (
              <div key={index} className="w-[60px] h-[60px] overflow-hidden border-2 border-transparent hover:border-black flex-shrink-0">
                <Image
                  src={img}
                  alt={`Thumbnail ${index}`}
                  width={60}
                  height={60}
                  className="h-[60px] w-[60px] object-cover"
                  onMouseEnter={() => setMainImage(img)}
                />
              </div>
            ))}
        </div>
        <div>
          <Image
            src={mainImage}
            alt={product.title}
            width={530}
            height={530}
            className="object-cover w-[530px] h-[530px] flex-shrink-0"
            // className="w-[530px] h-[530px] flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
}
