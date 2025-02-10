import Index from ".";
import PromotionalBanner from "@/app/ui/PromotionalBanner";
import TemuBanner from "@/app/ui/TemuBanner";

export default function Home() {
  return (
    <div className="mx-5 h-[2000px]">
      <TemuBanner/>
      <PromotionalBanner/>
      <Index/>
    </div>
  );
}
