import PromotionalBanner from "@/app/ui/TemuBanners/PromotionalBanner";
import TemuBanner from "@/app/ui/TemuBanners/TemuBanner";
import ClearanceDealBanner from "@/app/ui/TemuBanners/ClearanceDealBanner";
import ClearanceProducts from "@/app/ui/ProductCard/ClearanceProductCard";
import TemuDeliveryBanner from "@/app/ui/TemuBanners/TemuDeliveryBanner";
import CategoryList from "@/app/ui/CategoryList";
import AllproductsCard from "@/app/ui/ProductCard/RecommendedProductsCard";
import LighteningDealProducts from "@/app/ui/ProductCard/LightningProductCard";

export default function Home() {
  return (
    <div>
      <div className="m-10">
      <TemuBanner/>
      <PromotionalBanner/>
      <LighteningDealProducts/>
      <ClearanceDealBanner/>
      <ClearanceProducts/>
      <TemuDeliveryBanner/>
      <CategoryList/>
      <AllproductsCard/>
      </div>
    </div>
  );
}
