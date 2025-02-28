import ProductCategories from "@/app/ui/StoreComponent/ProductCategories";
import StoreDetails from "@/app/ui/StoreComponent/StoreDetails";
import StoreProducts from "@/app/ui/StoreComponent/StoreProducts";
function ProductStore() {
  
  return (
    <div className="!w-auto pt-5">
      <StoreDetails/>
      <ProductCategories/>
      <StoreProducts columns={4}/>

    </div>
  );
}

export default ProductStore;
