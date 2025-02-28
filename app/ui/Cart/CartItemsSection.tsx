import ProductsSectionGrid from "../ProductCard/ProductsSectionGrid";
import CartSelectedItems from "./CartSelectedItems";

const CartItemsSection = () => {
  return (
    <div className="flex flex-col w-[65%] min-w-[658px] ">
      <CartSelectedItems/>
      {/* Explore Products */}
      <section>
        <h3 className="font-semibold ml-2 mb-2">Explore Temu{"'"}s picks</h3>
        <ProductsSectionGrid columns={4} />
      </section>
    </div>
  );
};

export default CartItemsSection;
