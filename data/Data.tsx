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
}

const Data = () => {
  const products: Product[] = [
    {
      id: 1,
      description: "Wireless gaming mouse with 25K DPI optical sensor.",
      price: 149,
      sold: 9800,
      image: "/videos/Bag.mp4", // video (videoList[0])
      tags: ["#1 GAMING GEAR", "ESPORTS READY", "50% SOLD", "RGB LIGHTING"],
      reviews: [{ count: 6700, rating: 4.8 }],
      storeInfo: ["Global Gaming Experts", "Top-tier Performance", "Award-winning Design"]
    },
    {
      id: 2,
      description: "Flagship smartphone with A17 chip and pro camera system.",
      price: 999,
      sold: 5000,
      image: "/images/productPicture.jpg", // image
      tags: ["#1 TOP RATED", "#2 BEST SELLER", "PREMIUM PICK", "STAFF CHOICE"],
      reviews: [{ count: 1200, rating: 4.8 }],
      storeInfo: ["Innovative Tech Leaders", "Pioneering Mobile Solutions", "Unmatched Customer Service"]
    },
    {
      id: 3,
      description: "Premium smartwatch with advanced features and sleek design.",
      price: 499,
      sold: 1500,
      image: "/videos/premiumWatch.mp4",
      tags: ["#1 WEARABLE TECH", "SMARTWATCH", "LUXURY DESIGN", "LIMITED STOCK"],
      reviews: [{ count: 1200, rating: 4.8 }],
      storeInfo: ["Exclusive Craftsmanship", "High-Performance Tech", "Award-Winning Service"]
    },
    {
      id: 4,
      description: "High-performance blender with 1800W motor.",
      price: 399,
      sold: 2500,
      image: "/videos/brownShoes.mp4", // video (videoList[2])
      tags: ["#1 KITCHEN GADGET", "HEALTHY LIVING", "CHEF'S CHOICE", "5-YEAR WARRANTY"],
      reviews: [{ count: 4300, rating: 4.9 }],
      storeInfo: ["Kitchen Mastery", "Blending Perfection", "Chef's Favorite"]
    },
    {
      id: 5,
      description: "Professional mirrorless camera with 45MP full-frame sensor.",
      price: 2499,
      sold: 850,
      image: "/images/productPicture.jpg", // image
      tags: ["#1 IN PHOTOGRAPHY", "NEW RELEASE", "PRO GRADE", "BUNDLE DEAL"],
      reviews: [{ count: 300, rating: 4.9 }],
      storeInfo: ["Capture Life's Moments", "Precision Engineering", "Trusted by Professionals"]
    },
    {
      id: 6,
      description: "Ergonomic office chair with adjustable lumbar support.",
      price: 299,
      sold: 2200,
      image: "/videos/Cap.mp4", // video (videoList[3])
      tags: ["#3 OFFICE ESSENTIAL", "ERGONOMIC", "COMFORT SEATED", "DURABLE DESIGN"],
      reviews: [{ count: 1300, rating: 4.5 }],
      storeInfo: ["Ergonomic Comfort Redefined", "Innovative Seating Solutions", "Workplace Wellness Experts"]
    },
    {
      id: 7,
      description: "Wireless earbuds with spatial audio and ANC.",
      price: 229,
      sold: 8900,
      image: "/images/productPicture.jpg", // image
      tags: ["#2 AUDIO GEAR", "TRAVEL READY", "LAST CHANCE", "GIFT PACKAGING"],
      reviews: [{ count: 4500, rating: 4.8 }],
      storeInfo: ["Audio Perfection", "Immersive Sound Experience", "Cutting-edge ANC Technology"]
    },
    {
      id: 8,
      description: "Smartwatch with ECG and fall detection.",
      price: 349,
      sold: 5600,
      image: "/videos/cleanerBrush.mp4", // video (videoList[4])
      tags: ["#1 WEARABLE TECH", "HEALTH MONITOR", "NEW COLOR", "30-DAY TRIAL"],
      reviews: [{ count: 3200, rating: 4.7 }],
      storeInfo: ["Health & Innovation", "Smart Monitoring", "Life-saving Features"]
    },
    {
      id: 9,
      description: "Noise-cancelling wireless headphones with 30hr battery.",
      price: 349,
      sold: 15000,
      image: "/videos/earBuds.mp4", // video (videoList[5])
      tags: ["#3 BEST SELLER", "EDITOR'S CHOICE", "TRAVEL ESSENTIAL", "100+ BOUGHT TODAY"],
      reviews: [{ count: 4500, rating: 4.7 }],
      storeInfo: ["Sound Revolution", "Noise Cancellation Experts", "Premium Audio Quality"]
    },
    {
      id: 10,
      description: "8K QLED Smart TV with Quantum HDR32X technology.",
      price: 2999,
      sold: 650,
      image: "/images/productPicture.jpg", // image
      tags: ["#1 HOME ENTERTAINMENT", "CINEMA EXPERIENCE", "LIMITED STOCK", "FREE INSTALLATION"],
      reviews: [{ count: 250, rating: 4.8 }],
      storeInfo: ["Visual Brilliance", "Unrivaled Picture Quality", "Immersive Entertainment"]
    },
    {
      id: 11,
      description: "Compact drone with 4K camera and GPS return home.",
      price: 799,
      sold: 1200,
      image: "/videos/earRing.mp4", // video (videoList[6])
      tags: ["#1 DRONE", "4K CAPTURE", "GPS ENABLED", "FLIGHT ASSIST"],
      reviews: [{ count: 600, rating: 4.4 }],
      storeInfo: ["Sky High Adventures", "Precision Flight", "Aerial Mastery"]
    },
    {
      id: 12,
      description: "Robot vacuum with LiDAR navigation and mopping.",
      price: 699,
      sold: 2300,
      image: "/images/productPicture.jpg", // image
      tags: ["#1 SMART HOME", "TIME SAVER", "PET FRIENDLY", "APP CONTROLLED"],
      reviews: [{ count: 1500, rating: 4.5 }],
      storeInfo: ["Smart Cleaning Solutions", "Effortless Home Maintenance", "Innovation in Automation"]
    },
    {
      id: 13,
      description: "Portable air conditioner with smart control.",
      price: 499,
      sold: 1800,
      image: "/videos/gilletteBlade.mp4", // video (videoList[7])
      tags: ["SUMMER ESSENTIAL", "#2 HOME APPLIANCE", "ENERGY SAVER", "QUICK INSTALL"],
      reviews: [{ count: 950, rating: 4.4 }],
      storeInfo: ["Cooling Innovations", "Smart Climate Control", "Ultimate Comfort"]
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
    },
    {
      id: 15,
      description: "High-fidelity soundbar with Dolby Atmos support.",
      price: 499,
      sold: 1300,
      image: "/videos/hairRemoverKit.mp4", // video (videoList[8])
      tags: ["#1 AUDIO", "DOLBY ATMOS", "HOME THEATER", "CRYSTAL CLEAR"],
      reviews: [{ count: 750, rating: 4.6 }],
      storeInfo: ["Immersive Audio", "Theater Experience at Home", "State-of-the-Art Sound"]
    },
    {
      id: 16,
      description: "Professional drawing tablet with 8K pressure sensitivity.",
      price: 499,
      sold: 4200,
      image: "/videos/JoggerShoes.mp4", // video (videoList[9])
      tags: ["#1 CREATIVE TOOL", "ARTIST FAVORITE", "EDUCATION DISCOUNT", "ACCESSORY KIT"],
      reviews: [{ count: 3200, rating: 4.9 }],
      storeInfo: ["Creative Precision", "Artistic Excellence", "Inspiring Innovation"]
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
    },
    {
      id: 18,
      description: "Gaming laptop with RTX 4080 and 240Hz display.",
      price: 2599,
      sold: 900,
      image: "/videos/lintRemover.mp4", // video (videoList[10])
      tags: ["#1 GAMING LAPTOP", "VR READY", "LIMITED EDITION", "FREE GAME BUNDLE"],
      reviews: [{ count: 450, rating: 4.6 }],
      storeInfo: ["Gaming Powerhouse", "Elite Performance", "Cutting-edge Graphics"]
    },
    {
      id: 19,
      description: "Smart home security camera with night vision and motion detection.",
      price: 199,
      sold: 3000,
      image: "/images/productPicture.jpg", // image
      tags: ["#1 HOME SECURITY", "SMART DEVICE", "NIGHT VISION", "MOTION ALERT"],
      reviews: [{ count: 800, rating: 4.5 }],
      storeInfo: ["Security Redefined", "24/7 Vigilance", "Smart Surveillance"]
    },
    {
      id: 20,
      description: "Electric toothbrush with smart sensor.",
      price: 129,
      sold: 9500,
      image: "/videos/luxuryWatch.mp4", // video (videoList[11])
      tags: ["#1 ORAL CARE", "CLINICAL RESULTS", "REPLACEMENT HEADS", "TRAVEL CASE"],
      reviews: [{ count: 5800, rating: 4.7 }],
      storeInfo: ["Dental Innovation", "Smart Oral Care", "Trusted Hygiene Experts"]
    },
    {
      id: 21,
      description: "Smart LED light strip with app control and color changing.",
      price: 59,
      sold: 8000,
      image: "/videos/mechanicalPlas.mp4", // video (videoList[12])
      tags: ["#1 SMART HOME", "LED LIGHTING", "COLOR CHANGER", "ENERGY EFFICIENT"],
      reviews: [{ count: 1100, rating: 4.7 }],
      storeInfo: ["Ambient Lighting", "Customizable Mood", "Smart Home Essential"]
    },
    {
      id: 22,
      description: "Elegant ladies bag combining style and functionality.",
      price: 199,
      sold: 3200,
      image: "/videos/ladiesBag.mp4",
      tags: ["#1 FASHION", "TRENDY ACCESSORY", "STAFF PICK", "LIMITED EDITION"],
      reviews: [{ count: 850, rating: 4.6 }],
      storeInfo: ["Chic Design", "Luxury Materials", "Timeless Elegance"]
    },
    {
      id: 23,
      description: "Electric standing desk with programmable height.",
      price: 599,
      sold: 1500,
      image: "/videos/noseHairTrimmer.mp4", // video (videoList[13])
      tags: ["#2 HOME OFFICE", "ERGONOMIC DESIGN", "FREE SHIPPING", "EASY ASSEMBLY"],
      reviews: [{ count: 1200, rating: 4.5 }],
      storeInfo: ["Work Smart", "Adaptive Design", "Productivity Booster"]
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
    },
    {
      id: 25,
      description: "Smart fitness tracker with heart rate monitoring and GPS.",
      price: 99,
      sold: 4500,
      image: "/videos/ScissoreCombKit.mp4", // video (videoList[14])
      tags: ["#2 WEARABLE", "HEALTH TRACKING", "GPS MONITOR", "SILVER EDITION"],
      reviews: [{ count: 2500, rating: 4.4 }],
      storeInfo: ["Fitness Revolution", "Track Your Health", "Active Lifestyle"]
    },
    {
      id: 26,
      description: "4K action camera with waterproof housing.",
      price: 399,
      sold: 3200,
      image: "/videos/speakerSystem.mp4", // video (videoList[15])
      tags: ["#1 OUTDOOR GEAR", "ADVENTURE READY", "YOUTUBER'S PICK", "ACCESSORY KIT"],
      reviews: [{ count: 2100, rating: 4.6 }],
      storeInfo: ["Adventure Capture", "Waterproof Excellence", "Built for Extremes"]
    },
    {
      id: 27,
      description: "Ultra-slim laptop with OLED touchscreen and 32GB RAM.",
      price: 1899,
      sold: 2300,
      image: "/videos/SportyShoes.mp4", // video (videoList[16])
      tags: ["#2 PREMIUM PICK", "CREATOR EDITION", "BACK IN STOCK", "4-YEAR WARRANTY"],
      reviews: [{ count: 1800, rating: 4.6 }],
      storeInfo: ["Sleek and Powerful", "Performance at its Best", "Engineered for Excellence"]
    },
    {
      id: 28,
      description: "Wi-Fi 6 router with mesh network support.",
      price: 299,
      sold: 2900,
      image: "/videos/towel.mp4", // video (videoList[17])
      tags: ["#3 NETWORKING", "GAMING OPTIMIZED", "PARENTAL CONTROLS", "SETUP GUIDE"],
      reviews: [{ count: 1800, rating: 4.6 }],
      storeInfo: ["Network Redefined", "Speed and Security", "Seamless Connectivity"]
    },
    {
      id: 29,
      description: "Modern digital clock with LED display and multiple alarm features.",
      price: 89,
      sold: 4500,
      image: "/videos/digitalClock.mp4",
      tags: ["#2 HOME ESSENTIAL", "MODERN DESIGN", "ENERGY EFFICIENT", "BEST SELLER"],
      reviews: [{ count: 540, rating: 4.5 }],
      storeInfo: ["Precision Timekeeping", "Innovative Design", "Reliable Quality"]
    },
    {
      id: 30,
      description: "Bluetooth speaker with 360° sound quality.",
      price: 159,
      sold: 6800,
      image: "/images/productPicture.jpg", // image
      tags: ["#3 PORTABLE AUDIO", "PARTY READY", "20-HOUR PLAY", "WATERPROOF"],
      reviews: [{ count: 3200, rating: 4.5 }],
      storeInfo: ["Vibrant Sound", "Sleek Design", "Party-Ready Audio"]
    }
  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-1 md:justify-start justify-center">
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
