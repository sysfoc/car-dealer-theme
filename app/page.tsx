import Index from ".";
import PromotionalBanner from "@/app/ui/TemuBanners/PromotionalBanner";
import TemuBanner from "@/app/ui/TemuBanners/TemuBanner";
import ClearanceDealBanner from "@/app/ui/TemuBanners/ClearanceDealBanner";
import ClearanceProducts from "@/app/ui/ProductCard/ClearanceProductCard";
import TemuDeliveryBanner from "@/app/ui/TemuBanners/TemuDeliveryBanner";
import CategoryList from "@/app/ui/CategoryList";
import Data from "@/data/Data";
import Footer from "@/app/ui/Footer";

export default function Home() {
  return (
    <div>
      <div className="m-12">
      <TemuBanner/>
      <PromotionalBanner/>
      <Index/>
      <ClearanceDealBanner/>
      <ClearanceProducts/>
      <TemuDeliveryBanner/>
      <CategoryList/>
      <Data/>
      </div>
      <Footer/>
    </div>
  );
}
