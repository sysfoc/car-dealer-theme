import DashboardLayout from "@/app/ui/Dashboard/DashboardLayout";
import ProductsSectionGrid from "@/app/ui/ProductCard/ProductsSectionGrid";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <div className="max-w-[1192px] mx-auto">
      <DashboardLayout>{children}</DashboardLayout>
      {/* Explore section */}
      <section className="w-full">
        <h3 className="font-bold my-5 text-lg pl-2">Explore your interests</h3>
        <ProductsSectionGrid columns={5} />
      </section>
    </div>
  );
}
