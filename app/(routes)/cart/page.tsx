import CartDetails from "@/app/ui/Cart/CartDetails";
import CartItemsSection from "@/app/ui/Cart/CartItemsSection";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1 aria-label="Shopping cart"></h1>
      {/* BreadCrumbs */}
      <div className="pt-5">
        <nav>
          <ol className="flex text-sm gap-2">
            <li className="flex items-center text-gray-400 font-semibold">
              <Link href="/">Home &gt;</Link>
            </li>
            <li className="flex items-center text-gray-800 select-none">
              <span>Cart</span>
            </li>
          </ol>
        </nav>
      </div>
      {/* Cart Section */}
      <div className="flex justify-between">
        {/* Left side: cart items */}
        <CartItemsSection />
        {/* Right side: cart details */}
        <CartDetails/>
      </div>
    </div>
  );
};

export default page;
