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
  reviews: { count: number; rating: number }[];
  storeInfo: string[];
  category: string; // New Category attribute
}

const Data = () => {
  const products: Product[] = [
    {
      id: 1,
      description: "Stylish leather bag perfect for daily use and travel.",
      price: 149,
      sold: 9800,
      image: "/videos/Bag.mp4", // video
      tags: ["#1 GAMING GEAR", "ESPORTS READY", "50% SOLD", "RGB LIGHTING"],
      reviews: [{ count: 6700, rating: 4.8 }],
      storeInfo: ["Global Gaming Experts", "Top-tier Performance", "Award-winning Design"],
      category: "Accessories" // Category assigned
    },
    {
      id: 2,
      description: "Flagship smartphone with A17 chip and pro camera system.",
      price: 999,
      sold: 5000,
      image: "/images/productPicture.jpg", // image
      tags: ["#1 TOP RATED", "#2 BEST SELLER", "PREMIUM PICK", "STAFF CHOICE"],
      reviews: [{ count: 1200, rating: 4.8 }],
      storeInfo: ["Innovative Tech Leaders", "Pioneering Mobile Solutions", "Unmatched Customer Service"],
      category: "Electronics" // Category assigned
    },
    {
      id: 3,
      description: "Premium smartwatch with advanced features and sleek design.",
      price: 499,
      sold: 1500,
      image: "/videos/premiumWatch.mp4", // video
      tags: ["#1 WEARABLE TECH", "SMARTWATCH", "LUXURY DESIGN", "LIMITED STOCK"],
      reviews: [{ count: 1200, rating: 4.8 }],
      storeInfo: ["Exclusive Craftsmanship", "High-Performance Tech", "Award-Winning Service"],
      category: "Wearables" // Category assigned
    },
    {
      id: 4,
      description: "High-quality brown leather shoes for comfort and style.",
      price: 399,
      sold: 2500,
      image: "/videos/brownShoes.mp4", // video
      tags: ["#1 FASHION ACCESSORY", "PREMIUM QUALITY", "HANDMADE", "LIMITED EDITION"],
      reviews: [{ count: 4300, rating: 4.9 }],
      storeInfo: ["Elegant Designs", "Crafted with Care", "Timeless Fashion"],
      category: "Footwear" // Category assigned
    },
    {
      id: 5,
      description: "Professional mirrorless camera with 45MP full-frame sensor.",
      price: 2499,
      sold: 850,
      image: "/images/productPicture.jpg", // image
      tags: ["#1 IN PHOTOGRAPHY", "NEW RELEASE", "PRO GRADE", "BUNDLE DEAL"],
      reviews: [{ count: 300, rating: 4.9 }],
      storeInfo: ["Capture Life's Moments", "Precision Engineering", "Trusted by Professionals"],
      category: "Photography" // Category assigned
    },
    {
      id: 6,
      description: "Stylish cap with adjustable fit, perfect for sunny days.",
      price: 299,
      sold: 2200,
      image: "/videos/Cap.mp4", // video
      tags: ["#3 OFFICE ESSENTIAL", "ERGONOMIC", "COMFORT SEATED", "DURABLE DESIGN"],
      reviews: [{ count: 1300, rating: 4.5 }],
      storeInfo: ["Ergonomic Comfort Redefined", "Innovative Seating Solutions", "Workplace Wellness Experts"],
      category: "Accessories" // Category assigned
    },
    {
      id: 7,
      description: "Wireless earbuds with spatial audio and ANC.",
      price: 229,
      sold: 8900,
      image: "/images/productPicture.jpg", // image
      tags: ["#2 AUDIO GEAR", "TRAVEL READY", "LAST CHANCE", "GIFT PACKAGING"],
      reviews: [{ count: 4500, rating: 4.8 }],
      storeInfo: ["Audio Perfection", "Immersive Sound Experience", "Cutting-edge ANC Technology"],
      category: "Audio" // Category assigned
    },
    {
      id: 8,
      description: "An efficient cleaner brush designed to quickly and thoroughly clean makeup brushes, ensuring hygiene and longevity.",
      price: 349,
      sold: 5600,
      image: "/videos/cleanerBrush.mp4", // video
      tags: ["#1 WEARABLE TECH", "HEALTH MONITOR", "NEW COLOR", "30-DAY TRIAL"],
      reviews: [{ count: 3200, rating: 4.7 }],
      storeInfo: ["Health & Innovation", "Smart Monitoring", "Life-saving Features"],
      category: "Wearables" // Category assigned
    },
    {
      id: 9,
      description: "Noise-cancelling wireless headphones with 30hr battery.",
      price: 349,
      sold: 15000,
      image: "/videos/earBuds.mp4", // video
      tags: ["#3 BEST SELLER", "EDITOR'S CHOICE", "TRAVEL ESSENTIAL", "100+ BOUGHT TODAY"],
      reviews: [{ count: 4500, rating: 4.7 }],
      storeInfo: ["Sound Revolution", "Noise Cancellation Experts", "Premium Audio Quality"],
      category: "Audio" // Category assigned
    },
    {
      id: 10,
      description: "8K QLED Smart TV with Quantum HDR32X technology.",
      price: 2999,
      sold: 650,
      image: "/images/productPicture.jpg", // image
      tags: ["#1 HOME ENTERTAINMENT", "CINEMA EXPERIENCE", "LIMITED STOCK", "FREE INSTALLATION"],
      reviews: [{ count: 250, rating: 4.8 }],
      storeInfo: ["Visual Brilliance", "Unrivaled Picture Quality", "Immersive Entertainment"],
      category: "Electronics" // Category assigned
    },
    {
      id: 11,
      description: "Elegant and versatile earrings crafted to enhance your style, perfect for both casual and formal occasions.",
      price: 799,
      sold: 1200,
      image: "/videos/earRing.mp4", // video (videoList[6])
      tags: ["#1 DRONE", "4K CAPTURE", "GPS ENABLED", "FLIGHT ASSIST"],
      reviews: [{ count: 600, rating: 4.4 }],
      storeInfo: ["Sky High Adventures", "Precision Flight", "Aerial Mastery"],
      category: "Jewelry & Accessories"
    },
    {
      id: 12,
      description: "Robot vacuum with LiDAR navigation and mopping.",
      price: 699,
      sold: 2300,
      image: "/images/productPicture.jpg", // image
      tags: ["#1 SMART HOME", "TIME SAVER", "PET FRIENDLY", "APP CONTROLLED"],
      reviews: [{ count: 1500, rating: 4.5 }],
      storeInfo: ["Smart Cleaning Solutions", "Effortless Home Maintenance", "Innovation in Automation"],
      category: "Home Appliances"
    },
    {
      id: 13,
      description: " Precision-engineered Gillette blade for a smooth, comfortable, and close shave with minimal irritation.",
      price: 499,
      sold: 1800,
      image: "/videos/gilletteBlade.mp4", // video (videoList[7])
      tags: ["SUMMER ESSENTIAL", "#2 HOME APPLIANCE", "ENERGY SAVER", "QUICK INSTALL"],
      reviews: [{ count: 950, rating: 4.4 }],
      storeInfo: ["Cooling Innovations", "Smart Climate Control", "Ultimate Comfort"],
      category: "Personal Care"
    },
    {
      id: 14,
      description: "Wireless charging pad with fast charge technology.",
      price: 49,
      sold: 7000,
      image: "/images/productPicture.jpg", // image
      tags: ["#2 ACCESSORY", "FAST CHARGING", "SLEEK DESIGN", "HOT PICK"],
      reviews: [{ count: 1500, rating: 4.7 }],
      storeInfo: ["Charge Ahead", "Seamless Energy", "Innovative Connectivity"]
    ,category: "Electronics"
    },
    {
      id: 15,
      description: "A complete hair remover kit designed for smooth, easy, and painless hair removal at home.",
      price: 499,
      sold: 1300,
      image: "/videos/hairRemoverKit.mp4", // video (videoList[8])
      tags: ["#1 AUDIO", "DOLBY ATMOS", "HOME THEATER", "CRYSTAL CLEAR"],
      reviews: [{ count: 750, rating: 4.6 }],
      storeInfo: ["Immersive Audio", "Theater Experience at Home", "State-of-the-Art Sound"]
    ,category: "Personal Care"
    },
    {
      id: 16,
      description: "Comfortable and durable jogger shoes designed for all-day wear, offering support and style for any activity.",
      price: 499,
      sold: 4200,
      image: "/videos/JoggerShoes.mp4", // video (videoList[9])
      tags: ["#1 CREATIVE TOOL", "ARTIST FAVORITE", "EDUCATION DISCOUNT", "ACCESSORY KIT"],
      reviews: [{ count: 3200, rating: 4.9 }],
      storeInfo: ["Creative Precision", "Artistic Excellence", "Inspiring Innovation"]
      ,category: "Footwear"
    },
    {
      id: 17,
      description: "Foldable smartphone with dual AMOLED displays.",
      price: 1799,
      sold: 1500,
      image: "/images/productPicture.jpg", // image
      tags: ["INNOVATIVE DESIGN", "#3 TECH GADGET", "LAST UNITS", "FREE CASE INCLUDED"],
      reviews: [{ count: 850, rating: 4.4 }],
      storeInfo: ["Futuristic Design", "Next-gen Flexibility", "Unmatched Portability"]
    ,category: "Electronics"
    },
    {
      id: 18,
      description: "A compact and efficient lint remover that quickly removes fuzz, lint, and pet hair from clothes and fabrics.",
      price: 2599,
      sold: 900,
      image: "/videos/lintRemover.mp4", // video (videoList[10])
      tags: ["#1 GAMING LAPTOP", "VR READY", "LIMITED EDITION", "FREE GAME BUNDLE"],
      reviews: [{ count: 450, rating: 4.6 }],
      storeInfo: ["Gaming Powerhouse", "Elite Performance", "Cutting-edge Graphics"]
    ,category: "Home Appliances"
    },
    {
      id: 19,
      description: "A high-definition security camera designed to provide reliable surveillance and peace of mind for your home or business.",
      price: 199,
      sold: 3000,
      image: "/images/productPicture.jpg", // image
      tags: ["#1 HOME SECURITY", "SMART DEVICE", "NIGHT VISION", "MOTION ALERT"],
      reviews: [{ count: 800, rating: 4.5 }],
      storeInfo: ["Security Redefined", "24/7 Vigilance", "Smart Surveillance"]
    ,category: "Electronics"
    },
    {
      id: 20,
      description: "A premium luxury watch that combines exquisite craftsmanship with timeless design, perfect for any occasion.",
      price: 129,
      sold: 9500,
      image: "/videos/luxuryWatch.mp4", // video (videoList[11])
      tags: ["#1 ORAL CARE", "CLINICAL RESULTS", "REPLACEMENT HEADS", "TRAVEL CASE"],
      reviews: [{ count: 5800, rating: 4.7 }],
      storeInfo: ["Dental Innovation", "Smart Oral Care", "Trusted Hygiene Experts"]
    ,category: "Accessories"
    },
    {
      id: 21,
      description: " A durable and precise mechanical plastic tool designed for high-performance applications and long-lasting use.",
      price: 59,
      sold: 8000,
      image: "/videos/mechanicalPlas.mp4", // video (videoList[12])
      tags: ["#1 SMART HOME", "LED LIGHTING", "COLOR CHANGER", "ENERGY EFFICIENT"],
      reviews: [{ count: 1100, rating: 4.7 }],
      storeInfo: ["Ambient Lighting", "Customizable Mood", "Smart Home Essential"]
    ,category: "Tools"
    },
    {
      id: 22,
      description: "A stylish and functional ladies' bag, perfect for carrying essentials while adding a chic touch to any outfit.",
      price: 199,
      sold: 3200,
      image: "/videos/ladiesBag.mp4",
      tags: ["#1 FASHION", "TRENDY ACCESSORY", "STAFF PICK", "LIMITED EDITION"],
      reviews: [{ count: 850, rating: 4.6 }],
      storeInfo: ["Chic Design", "Luxury Materials", "Timeless Elegance"]
    ,category: "Fashion Accessories"
    },
    {
      id: 23,
      description: "A nose hair trimmer designed for quick, painless, and safe trimming of unwanted nose hair.",
      price: 599,
      sold: 1500,
      image: "/videos/noseHairTrimmer.mp4", // video (videoList[13])
      tags: ["#2 HOME OFFICE", "ERGONOMIC DESIGN", "FREE SHIPPING", "EASY ASSEMBLY"],
      reviews: [{ count: 1200, rating: 4.5 }],
      storeInfo: ["Work Smart", "Adaptive Design", "Productivity Booster"]
    ,category: "Personal Care"
    },
    {
      id: 24,
      description: "Wireless security doorbell with two-way talk.",
      price: 149,
      sold: 5000,
      image: "/images/productPicture.jpg", // image
      tags: ["#1 HOME SECURITY", "SMART DOORBELL", "EASY INSTALL", "HD VIDEO"],
      reviews: [{ count: 1600, rating: 4.5 }],
      storeInfo: ["Welcome Home", "Smart Access", "Enhanced Security"]
    ,category: "Electronics"
    },
    {
      id: 25,
      description: "A versatile scissor and comb kit designed for precise hair cutting and styling, perfect for professional or home use.",
      price: 99,
      sold: 4500,
      image: "/videos/ScissoreCombKit.mp4", // video (videoList[14])
      tags: ["#2 WEARABLE", "HEALTH TRACKING", "GPS MONITOR", "SILVER EDITION"],
      reviews: [{ count: 2500, rating: 4.4 }],
      storeInfo: ["Fitness Revolution", "Track Your Health", "Active Lifestyle"]
    ,category: "Personal Care"
    },
    {
      id: 26,
      description: "A high-quality speaker system delivering clear, powerful sound for an immersive audio experience.",
      price: 399,
      sold: 3200,
      image: "/videos/speakerSystem.mp4", // video (videoList[15])
      tags: ["#1 OUTDOOR GEAR", "ADVENTURE READY", "YOUTUBER'S PICK", "ACCESSORY KIT"],
      reviews: [{ count: 2100, rating: 4.6 }],
      storeInfo: ["Adventure Capture", "Waterproof Excellence", "Built for Extremes"]
    ,category: "Electronics"
    },
    {
      id: 27,
      description: "Comfortable and durable sporty shoes designed for active lifestyles, offering support and performance for various sports and workouts.",
      price: 1899,
      sold: 2300,
      image: "/videos/SportyShoes.mp4", // video (videoList[16])
      tags: ["#2 PREMIUM PICK", "CREATOR EDITION", "BACK IN STOCK", "4-YEAR WARRANTY"],
      reviews: [{ count: 1800, rating: 4.6 }],
      storeInfo: ["Sleek and Powerful", "Performance at its Best", "Engineered for Excellence"]
    ,category: "Footwear"
    },
    {
      id: 28,
      description: "Soft and absorbent towel perfect for drying off after a shower or bath, providing comfort and durability.",
      price: 299,
      sold: 2900,
      image: "/videos/towel.mp4", // video (videoList[17])
      tags: ["#3 NETWORKING", "GAMING OPTIMIZED", "PARENTAL CONTROLS", "SETUP GUIDE"],
      reviews: [{ count: 1800, rating: 4.6 }],
      storeInfo: ["Network Redefined", "Speed and Security", "Seamless Connectivity"]
    ,category: "Home Essentials"
    },
    {
      id: 29,
      description: "A sleek and easy-to-read digital clock that displays the time with precision and style.",
      price: 89,
      sold: 4500,
      image: "/videos/digitalClock.mp4",
      tags: ["#2 HOME ESSENTIAL", "MODERN DESIGN", "ENERGY EFFICIENT", "BEST SELLER"],
      reviews: [{ count: 540, rating: 4.5 }],
      storeInfo: ["Precision Timekeeping", "Innovative Design", "Reliable Quality"]
    ,category: "Home Essentials"
    },
    {
      id: 30,
      description: "A portable Bluetooth speaker with 360° sound quality, offering immersive audio and effortless connectivity for any setting.",
      price: 159,
      sold: 6800,
      image: "/images/productPicture.jpg", // image
      tags: ["#3 PORTABLE AUDIO", "PARTY READY", "20-HOUR PLAY", "WATERPROOF"],
      reviews: [{ count: 3200, rating: 4.5 }],
      storeInfo: ["Vibrant Sound", "Sleek Design", "Party-Ready Audio"]
    ,category: "Electronics"
    }
  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap md:justify-start justify-center">
        {products.map((product) => (
          <div key={product.id} className="flex-grow min-w-[200px] max-w-[250px] md:mx-0 mx-auto">
            <RecommendedProductsCard product={product} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5 hover:scale-105 transition-all">
        <button className="bg-orange-500 text-white px-10 py-4 flex items-center rounded-full">
          Show More 
          <IoIosArrowDown className="ml-1 text-sm" />
        </button>
      </div>
    </div>
  );
};

export default Data;
