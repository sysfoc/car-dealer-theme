import Index from ".";
import PromotionalBanner from "@/app/ui/Temu Banners/PromotionalBanner";
import TemuBanner from "@/app/ui/Temu Banners/TemuBanner";
import ClearanceDealBanner from "@/app/ui/Temu Banners/ClearanceDealBanner";
import ClearanceProducts from "@/app/ui/Product Card/ClearanceProductCard";
import TemuDeliveryBanner from "@/app/ui/Temu Banners/TemuDeliveryBanner";
import CategoryList from "@/app/ui/CategoryList";


export default function Home() {
  return (
    <div className="mx-5">
      <TemuBanner/>
      <PromotionalBanner/>
      <Index/>
      <ClearanceDealBanner/>
      <ClearanceProducts/>
      <TemuDeliveryBanner/>
      <CategoryList/>
    </div>
  );
}
