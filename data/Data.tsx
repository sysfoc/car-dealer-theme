"use client";

import RecommendedProductsCard from "@/app/ui/ProductCard/RecommendedProductsCard";
import { IoIosArrowDown } from "react-icons/io";
interface Product {
  id: number;
  description: string;
  price: number;
  sold: number;
  image: string;
  tags: string[];
  reviews: {
    count: number;
    rating: number;
  }[];
  storeInfo: string[];
}

const Data = () => {
  const products: Product[] = [
    {
      "id": 1,
      "description": "Flagship smartphone with A17 chip and pro camera system.",
      "price": 999,
      "sold": 5000,
      "image": "/images/productPicture.jpg",
      "tags": ["#1 TOP RATED", "#2 BEST SELLER", "PREMIUM PICK", "STAFF CHOICE"],
      "reviews": [{ "count": 1200, "rating": 4.8 }],
      "storeInfo": ["8 Years Established", "Trusted Brand", "Fast Shipping"]
    },
    {
      "id": 2,
      "description": "High-end Android phone with 200MP camera and AMOLED display.",
      "price": 899,
      "sold": 4200,
      "image": "/images/productPicture.jpg",
      "tags": ["#3 TOP RATED", "ALMOST SOLD OUT", "LATEST TECH", "FLASH SALE"],
      "reviews": [{ "count": 950, "rating": 4.5 }],
      "storeInfo": ["5 Years Established", "Moderate Return Rate", "24/7 Support"]
    },
    {
      "id": 3,
      "description": "Professional mirrorless camera with 45MP full-frame sensor.",
      "price": 2499,
      "sold": 850,
      "image": "/images/productPicture.jpg",
      "tags": ["#1 IN PHOTOGRAPHY", "NEW RELEASE", "PRO GRADE", "BUNDLE DEAL"],
      "reviews": [{ "count": 300, "rating": 4.9 }],
      "storeInfo": ["7 Years Established", "Quality Assured", "Repeat Customers"]
    },
    {
      "id": 4,
      "description": "Noise-cancelling wireless headphones with 30hr battery.",
      "price": 349,
      "sold": 15000,
      "image": "/images/productPicture.jpg",
      "tags": ["#3 BEST SELLER", "EDITOR'S CHOICE", "TRAVEL ESSENTIAL", "100+ BOUGHT TODAY"],
      "reviews": [{ "count": 4500, "rating": 4.7 }],
      "storeInfo": ["2 Years Established", "High Return Rate", "Customer Favorite"]
    },
    {
      "id": 5,
      "description": "Ultra-slim laptop with OLED touchscreen and 32GB RAM.",
      "price": 1899,
      "sold": 2300,
      "image": "/images/productPicture.jpg",
      "tags": ["#2 PREMIUM PICK", "CREATOR EDITION", "BACK IN STOCK", "4-YEAR WARRANTY"],
      "reviews": [{ "count": 1800, "rating": 4.6 }],
      "storeInfo": ["8 Years Established", "Low Return Rate", "Innovative Solutions"]
    },
    {
      "id": 6,
      "description": "8K QLED Smart TV with Quantum HDR32X technology.",
      "price": 2999,
      "sold": 650,
      "image": "/images/productPicture.jpg",
      "tags": ["#1 HOME ENTERTAINMENT", "CINEMA EXPERIENCE", "LIMITED STOCK", "FREE INSTALLATION"],
      "reviews": [{ "count": 250, "rating": 4.8 }],
      "storeInfo": ["6 Years Established", "Trusted Brand", "Global Reach"]
    },
    {
      "id": 7,
      "description": "Professional drawing tablet with 8K pressure sensitivity.",
      "price": 499,
      "sold": 4200,
      "image": "/images/productPicture.jpg",
      "tags": ["#1 CREATIVE TOOL", "ARTIST FAVORITE", "EDUCATION DISCOUNT", "ACCESSORY KIT"],
      "reviews": [{ "count": 3200, "rating": 4.9 }],
      "storeInfo": ["12 Years Established", "Repeat Customers", "Quality Assured"]
    },
    {
      "id": 8,
      "description": "Foldable smartphone with dual AMOLED displays.",
      "price": 1799,
      "sold": 1500,
      "image": "/images/productPicture.jpg",
      "tags": ["INNOVATIVE DESIGN", "#3 TECH GADGET", "LAST UNITS", "FREE CASE INCLUDED"],
      "reviews": [{ "count": 850, "rating": 4.4 }],
      "storeInfo": ["3 Years Established", "High Return Rate", "Exclusive Deals"]
    },
    {
      "id": 9,
      "description": "Wireless gaming mouse with 25K DPI optical sensor.",
      "price": 149,
      "sold": 9800,
      "image": "/images/productPicture.jpg",
      "tags": ["#1 GAMING GEAR", "ESPORTS READY", "50% SOLD", "RGB LIGHTING"],
      "reviews": [{ "count": 6700, "rating": 4.8 }],
      "storeInfo": ["9 Years Established", "Low Return Rate", "24/7 Support"]
    },
    {
      "id": 10,
      "description": "High-performance blender with 1800W motor.",
      "price": 399,
      "sold": 2500,
      "image": "/images/productPicture.jpg",
      "tags": ["#1 KITCHEN GADGET", "HEALTHY LIVING", "CHEF'S CHOICE", "5-YEAR WARRANTY"],
      "reviews": [{ "count": 4300, "rating": 4.9 }],
      "storeInfo": ["15 Years Established", "Repeat Customers", "Customer Favorite"]
    },
    {
      "id": 11,
      "description": "Wireless earbuds with spatial audio and ANC.",
      "price": 229,
      "sold": 8900,
      "image": "/images/productPicture.jpg",
      "tags": ["#2 AUDIO GEAR", "TRAVEL READY", "LAST CHANCE", "GIFT PACKAGING"],
      "reviews": [{ "count": 4500, "rating": 4.8 }],
      "storeInfo": ["3 Years Established", "Fast Shipping", "Quality Assured"]
    },
    {
      "id": 12,
      "description": "Robot vacuum with LiDAR navigation and mopping.",
      "price": 699,
      "sold": 2300,
      "image": "/images/productPicture.jpg",
      "tags": ["#1 SMART HOME", "TIME SAVER", "PET FRIENDLY", "APP CONTROLLED"],
      "reviews": [{ "count": 1500, "rating": 4.5 }],
      "storeInfo": ["4 Years Established", "High Return Rate", "Eco Friendly"]
    },
    {
      "id": 13,
      "description": "Electric standing desk with programmable height.",
      "price": 599,
      "sold": 1500,
      "image": "/images/productPicture.jpg",
      "tags": ["#2 HOME OFFICE", "ERGONOMIC DESIGN", "FREE SHIPPING", "EASY ASSEMBLY"],
      "reviews": [{ "count": 1200, "rating": 4.5 }],
      "storeInfo": ["4 Years Established", "Moderate Return Rate", "Trusted Brand"]
    },
    {
      "id": 14,
      "description": "Wi-Fi 6 router with mesh network support.",
      "price": 299,
      "sold": 2900,
      "image": "/images/productPicture.jpg",
      "tags": ["#3 NETWORKING", "GAMING OPTIMIZED", "PARENTAL CONTROLS", "SETUP GUIDE"],
      "reviews": [{ "count": 1800, "rating": 4.6 }],
      "storeInfo": ["7 Years Established", "Repeat Customers", "Personalized Service"]
    },
    {
      "id": 15,
      "description": "Smartwatch with ECG and fall detection.",
      "price": 349,
      "sold": 5600,
      "image": "/images/productPicture.jpg",
      "tags": ["#1 WEARABLE TECH", "HEALTH MONITOR", "NEW COLOR", "30-DAY TRIAL"],
      "reviews": [{ "count": 3200, "rating": 4.7 }],
      "storeInfo": ["8 Years Established", "Low Return Rate", "Customer Favorite"]
    },
    {
      "id": 16,
      "description": "4K action camera with waterproof housing.",
      "price": 399,
      "sold": 3200,
      "image": "/images/productPicture.jpg",
      "tags": ["#1 OUTDOOR GEAR", "ADVENTURE READY", "YOUTUBER'S PICK", "ACCESSORY KIT"],
      "reviews": [{ "count": 2100, "rating": 4.6 }],
      "storeInfo": ["6 Years Established", "Moderate Return Rate", "Award-Winning Service"]
    },
    {
      "id": 17,
      "description": "Portable air conditioner with smart control.",
      "price": 499,
      "sold": 1800,
      "image": "/images/productPicture.jpg",
      "tags": ["SUMMER ESSENTIAL", "#2 HOME APPLIANCE", "ENERGY SAVER", "QUICK INSTALL"],
      "reviews": [{ "count": 950, "rating": 4.4 }],
      "storeInfo": ["5 Years Established", "Low Return Rate", "Fast Shipping"]
    },
    {
      "id": 18,
      "description": "Gaming laptop with RTX 4080 and 240Hz display.",
      "price": 2599,
      "sold": 900,
      "image": "/images/productPicture.jpg",
      "tags": ["#1 GAMING LAPTOP", "VR READY", "LIMITED EDITION", "FREE GAME BUNDLE"],
      "reviews": [{ "count": 450, "rating": 4.6 }],
      "storeInfo": ["10 Years Established", "Low Return Rate", "Quality Assured"]
    },
    {
      "id": 19,
      "description": "Bluetooth speaker with 360° sound.",
      "price": 159,
      "sold": 6800,
      "image": "/images/productPicture.jpg",
      "tags": ["#3 PORTABLE AUDIO", "PARTY READY", "20-HOUR PLAY", "WATERPROOF"],
      "reviews": [{ "count": 3200, "rating": 4.5 }],
      "storeInfo": ["4 Years Established", "High Return Rate", "Trusted Brand"]
    },
    {
      "id": 20,
      "description": "Electric toothbrush with smart sensor.",
      "price": 129,
      "sold": 9500,
      "image": "/images/productPicture.jpg",
      "tags": ["#1 ORAL CARE", "CLINICAL RESULTS", "REPLACEMENT HEADS", "TRAVEL CASE"],
      "reviews": [{ "count": 5800, "rating": 4.7 }],
      "storeInfo": ["9 Years Established", "Low Return Rate", "Innovative Solutions"]
    },
  ]  

return (
  <div className="w-full">
    <div className="flex flex-wrap gap-1 md:justify-start justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex-grow min-w-[200px] max-w-[250px] md:mx-0 mx-auto"
        >
          <RecommendedProductsCard product={product} />
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-5">
      <button
        className="bg-orange-500 text-white px-10 py-4 rounded-full">
        Show More 
      </button>
    </div>
  </div>
);

};

export default Data;
