import PromotionalBanner from "@/app/ui/TemuBanners/PromotionalBanner";
import TemuBanner from "@/app/ui/TemuBanners/TemuBanner";
import ClearanceDealBanner from "@/app/ui/TemuBanners/ClearanceDealBanner";
import ClearanceProducts from "@/app/ui/ProductCard/ClearanceProductCard";
import TemuDeliveryBanner from "@/app/ui/TemuBanners/TemuDeliveryBanner";
import CategoryList from "@/app/ui/CategoryList";
import LighteningDealProducts from "@/app/ui/ProductCard/LightningProductCard";
import ProductsSectionGrid from "./ui/ProductCard/ProductsSectionGrid";

export default function Home() {
  return (
      <main className="my-10">
        <TemuBanner />
        <PromotionalBanner />
        <LighteningDealProducts />
        <ClearanceDealBanner />
        <ClearanceProducts />
        <TemuDeliveryBanner />
        <CategoryList />
        <ProductsSectionGrid />
      </main>
  );
}
